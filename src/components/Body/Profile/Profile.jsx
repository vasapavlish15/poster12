import s from './Profile.module.css';
import { useEffect, useState } from "react";
import { useAuth, upload } from '../../../Firebase.js';
import bg from '../../../image/bg.png';
import { render } from '@testing-library/react';
import { getAuth } from 'firebase/auth';

export default function Profile() {
    const currentUser = useAuth();
    const a = getAuth();
    const user = a.currentUser; 
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

    function handleChange(e) {
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            setPhoto(file);
            render();
        }
    }

    function handleClick() {
        upload(photo, currentUser, setLoading);
    }

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhotoURL(currentUser.photoURL);
        }
    }, [currentUser]);



    return (
        <div className="fields">
            <img src={photoURL} alt="Avatar" className={s.avatar} />
            <img src={bg} alt="bg" />
            <div className={s.info}>
                <div className={s.userInfo}>
                    <div className={s.userName}>
                        {user.displayName}
                    </div>
                    <div className={s.userEmail}>
                        {currentUser?.email}
                    </div>
                </div>
            </div>
            {/* <input type="file" onChange={handleChange} />
            <button disabled={loading || !photo} onClick={handleClick}>Upload</button> */}
        </div>
    );
}