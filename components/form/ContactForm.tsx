// components/ContactForm.tsx
import React, { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';



const ContactForm: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        const notify = () => toast.success('Message has been sent successfully');

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ name: '', email: '', message: '' });
                setIsOpen(false);
                notify()
            } else {
                setStatus('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Close modal when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='text-white'>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <button
                className="hover:text-red-700"
                onClick={() => setIsOpen(true)}
            >
                CONTACT
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
                    <div ref={modalRef} className="bg-slate-900 bg-opacity-80 p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <button
                            className="text-gray-500 hover:text-gray-700 float-right"
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>
                        <div className='flex justify-between'>
                            <h2 className="text-2xl mb-4 text-white">Let&apos;s get in touch</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-white">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded text-black"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-white">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded text-black"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-white">Message:</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-10 border border-gray-300 rounded text-black"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex justify-center items-center"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="loader w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    "Send"
                                )}
                            </button>
                        </form>
                        {status && <p className="mt-4 text-center">{status}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
