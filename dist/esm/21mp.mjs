export const name="21mp";
export const id="dl_c69308ead1ccfdb7ee93";
export const url=new URL("../icons/21mp.svg?v=6af9e0a711e25b81e4f0b4c2b447ed45d2803de6ad784c3e10b4ecd2c0da8380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
