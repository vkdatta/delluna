export const name="contactless-payment-light";
export const id="dl_cf73842fa19f459195da";
export const url=new URL("../../icons/C/contactless-payment-light.svg?v=abc0a328747d1079da60ab8266c537cb91de866dc3dc9fb54288ca5087bc1b18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
