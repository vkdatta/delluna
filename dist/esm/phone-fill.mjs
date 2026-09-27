export const name="phone-fill";
export const id="dl_57585cec892b47c8bef3";
export const url=new URL("../icons/phone-fill.svg?v=2236d8075e0c613d41651c57d8ee6ff9804172f9eeef7de131134a5f1f94f1c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
