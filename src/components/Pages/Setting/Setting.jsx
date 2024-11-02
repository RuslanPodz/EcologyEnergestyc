import React from 'react';

import styles from './Setting.module.css';

function Settings() {
    return (
        <section className={styles.settings}>
            <div className={styles.header}>
                <h2>Редагування профілю</h2>
                <p>Подбайте про конфіденційність <br />
                 своїх особистих даних. <br />
                  Інформація, яку ви додаєте сюди,<br />
                   відображається для всіх<br />
                    користувачів, що можуть<br />
                     переглядати ваш профіль.</p>
            </div>
            <form className={styles.form}>
                <div className={styles.leftSection}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="firstName">Імя:</label>
                        <input type="text" id="firstName" required placeholder="Введіть ваше ім'я" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="lastName">Прізвище:</label>
                        <input type="text" id="lastName" required placeholder="Введіть ваше прізвище" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Імя користувача:</label>
                        <input type="text" id="username" required placeholder="Введіть свій nickname" />
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <label htmlFor="aboutMe">Про вас:</label>
                    <textarea id="aboutMe" rows="6" required placeholder="Розкажіть свою історію" />
                </div>
                <button className={styles.saveButton} type="submit">Зберегти</button>
            </form>
        </section>
    );
}

export default Settings;
