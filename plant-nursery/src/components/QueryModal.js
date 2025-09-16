import React, { useState } from 'react';
import './QueryModal.css';

const QueryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [missingFields, setMissingFields] = useState([]);

  // Google Form URL - Your actual Google Form URL
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfo8LBbLS7Q33rEoj8IChDa_hJ8r1X7jlMCGEkPtflU1Xr-iQ/formResponse';
  
  // Google Form field names - Your actual field names from the pre-filled URL
  const FORM_FIELDS = {
    name: 'entry.2031610365',      // Name field
    phone: 'entry.966171313',      // Phone Number field
    address: 'entry.867070390',    // Address field
    query: 'entry.105861230'       // Query field
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    if (submitStatus === 'validation') {
      setSubmitStatus('');
      setMissingFields([]);
    }
  };

  const validateRequiredFields = () => {
    const missing = [];
    
    if (!formData.name.trim()) {
      missing.push('name');
    }
    
    if (!formData.phone.trim()) {
      missing.push('phone number');
    }
    
    if (!formData.query.trim()) {
      missing.push('query');
    }
    
    return missing;
  };

  const createValidationMessage = (fields) => {
    if (fields.length === 1) {
      return `Please fill ${fields[0]} to send the query.`;
    } else if (fields.length === 2) {
      return `Please fill ${fields[0]} and ${fields[1]} to send the query.`;
    } else if (fields.length === 3) {
      return `Please fill ${fields[0]}, ${fields[1]} and ${fields[2]} to send the query.`;
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check required fields
    const missing = validateRequiredFields();
    if (missing.length > 0) {
      setMissingFields(missing);
      setSubmitStatus('validation');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');
    setMissingFields([]);

    try {
      // Create form data for Google Forms
      const googleFormData = new FormData();
      googleFormData.append(FORM_FIELDS.name, formData.name);
      googleFormData.append(FORM_FIELDS.phone, formData.phone);
      googleFormData.append(FORM_FIELDS.address, formData.address);
      googleFormData.append(FORM_FIELDS.query, formData.query);

      // Submit to Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData
      });

      setSubmitStatus('success');
      setTimeout(() => {
        handleClose();
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Reset form data when closing
    setFormData({
      name: '',
      phone: '',
      address: '',
      query: ''
    });
    setSubmitStatus('');
    setMissingFields([]);
    setIsSubmitting(false);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Share Your Query</h2>
          <button className="close-button" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="query-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address (optional)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="query">Your Query *</label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleInputChange}
              placeholder="Please describe your query about plants or nursery services..."
              rows="4"
            />
          </div>

          {submitStatus === 'validation' && missingFields.length > 0 && (
            <div className="status-message validation-error">
              {createValidationMessage(missingFields)}
            </div>
          )}

          {submitStatus === 'success' && (
            <div className="status-message success">
              ✓ Your query has been submitted successfully! We'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              ✗ There was an error submitting your query. Please try again.
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={handleClose}>
              Cancel
            </button>
            <button 
              type="submit" 
              className="send-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Query'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueryModal; 