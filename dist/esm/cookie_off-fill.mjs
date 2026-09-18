export const name="cookie_off-fill";
export const id="dl_59f27961d1a846c59ce4";
export const url=new URL("../icons/cookie_off-fill.svg?v=517f6d42979d5711c53e2229df204027d85fd806b4a8fe1e2b3eb35662f181c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
