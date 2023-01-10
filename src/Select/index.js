
const Select = ({ currency, setCurrency, currencies }) => (
    <div className="fieldset__currencyPlace">
        <label className="fieldset__label "><span className="fieldset__select js-currencyNow">Euro</span></label>

        <select
            className="fieldset__input js-select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
        >
            {currencies.map((currency => (
                <option
                    key={currency.short}
                    value={currency.short}
                >
                    {currency.name}
                </option>
            )))};

        </select>
    </div>
);

export default Select;