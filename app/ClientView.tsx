"use client";

import { clearValueAction, setValueAction } from "./actions";

export default function ClientView({ value }: { value: string | null }) {
  return (
    <div>
      <div className="secret-key-value">
      {value ? (
        <>
          <span>
            The value of the secret key is:
          </span>
          <strong>{value}</strong>
        </>
      ) : (
        <p>No value is set for the secret key</p>
      )}
      </div>
      <div className="update-secret-key-value-btns">
      <form action={setValueAction}>
        <button type="submit">{value ? "update" : "set"} value</button>
      </form>
      {value && <form action={clearValueAction}>
        <button type="submit">clear value</button>
      </form>}
      </div>
    </div>
  );
}
