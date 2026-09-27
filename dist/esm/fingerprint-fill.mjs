export const name="fingerprint-fill";
export const id="dl_3e2d2a8aa72a435ab50f";
export const url=new URL("../icons/fingerprint-fill.svg?v=4242806d9d1964e25fb22f6f7600df24710ef4abd6204223eaa8fe9383775dc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
