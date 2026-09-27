export const name="stylus_fountain_pen";
export const id="dl_0072d767e96f6facc824";
export const url=new URL("../icons/stylus_fountain_pen.svg?v=8fd1a52f23c744d8badecec8feb5f9a91292056ef31930701bbb005e0e9cc0b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
