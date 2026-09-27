export const name="diamond-bold";
export const id="dl_431456d387984ac0a9bc";
export const url=new URL("../icons/diamond-bold.svg?v=c83c819345dbe099f0c18fb5b41fe3c9d60395321833aea51b1b0776e984a18a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
