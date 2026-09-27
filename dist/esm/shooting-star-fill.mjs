export const name="shooting-star-fill";
export const id="dl_fb077a7ab06402b1adc9";
export const url=new URL("../icons/shooting-star-fill.svg?v=044c5f9d83c3a634118c9c1aafedcdd9ae0ab239a11a9b3f8e27b27fd32b13f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
