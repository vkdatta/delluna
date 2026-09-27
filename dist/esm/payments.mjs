export const name="payments";
export const id="dl_8c53ca00c7c8ea23b377";
export const url=new URL("../icons/payments.svg?v=57fc3abcbc7211fdd34ee73c46429c86b966658e9df29c9484c7afe11bdcfa5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
