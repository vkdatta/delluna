export const name="trademark";
export const id="dl_5b9774d0bd79428d8f1b";
export const url=new URL("../icons/T/trademark.svg?v=7b22f06a0d4e0df499ca87db902baa6173bb7d5ab435a88f1d38cd908821d6bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
