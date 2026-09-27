export const name="contactless-payment-bold";
export const id="dl_42e959bc9bef40a4afc9";
export const url=new URL("../icons/contactless-payment-bold.svg?v=691514554c612c1235ca5b0e9c7ee51380ce7f378a1e6ecfa3ae7a3a5ceefdb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
