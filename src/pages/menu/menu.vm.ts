import { useEffect } from 'react';
import { useState } from 'react';
import { BASE_API } from '../../api';


export default function FaqDetailViewModel() {
    const [faqData, setFaqData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pertanyaan, setPertanyaan] = useState('');
    const [jawaban, setJawaban] = useState('');
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const startUpdating = () => setUpdating(true);
    const finishUpdating = () => setUpdating(false);
    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);

    return {

    };
}
