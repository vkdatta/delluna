export const name="speed_1_2x";
export const id="dl_5561e2786c5fe934a1a8";
export const url=new URL("../icons/speed_1_2x.svg?v=b377dbe2012ff11d484ab9f0ae28f294da411e73a171a7378c0fae89dceb5efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
