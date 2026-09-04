export const name="paypal-logo";
export const id="dl_592462a1f4674a2e8467";
export const url=new URL("../../icons/P/paypal-logo.svg?v=f30fe70585edaf016f12c91bcb736c23fb57a73a080e8671b17aa2ad5f574f42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
