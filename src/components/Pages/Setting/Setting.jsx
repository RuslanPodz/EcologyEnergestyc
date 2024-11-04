import React from 'react';

import styles from './Setting.module.css';

function Settings() {
    return (
        <section className={styles.settings} data-testid="settings">
            <div className={styles.header} data-testid="settings-header">
                <h2>Редагування профілю</h2>
                <p>Подбайте про конфіденційність <br />
                 своїх особистих даних. <br />
                  Інформація, яку ви додаєте сюди,<br />
                   відображається для всіх<br />
                    користувачів, що можуть<br />
                     переглядати ваш профіль.</p>
            </div>
            <form className={styles.form} data-testid="settings-form">
                <div className={styles.leftSection}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="firstName">Імя:</label>
                        <input type="text" id="firstName" required placeholder="Введіть ваше ім'я" data-testid="firstName" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="lastName">Прізвище:</label>
                        <input type="text" id="lastName" required placeholder="Введіть ваше прізвище" data-testid="lastName" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Імя користувача:</label>
                        <input type="text" id="username" required placeholder="Введіть свій nickname" data-testid="username" />
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <label htmlFor="aboutMe">Про вас:</label>
                    <textarea id="aboutMe" rows="6" required placeholder="Розкажіть свою історію" data-testid="aboutMe" />
                </div>
                <button className={styles.saveButton} type="submit" data-testid="save-button">Зберегти</button>
            </form>
        </section>
    );
}

export default Settings;
