export const name="lucid_2-lock-keyhole";
export const id="dl_42d8546126d344d194f3";
export const url=new URL("../icons/lucid_2-lock-keyhole.svg?v=e7c8706f9206b1eb619e3fb3cbfc0dbef093224d397cbd85f12f8482d10c3826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
