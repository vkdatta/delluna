export const name="stylus_fountain_pen";
export const id="dl_bd30c8e189bdb2f04590";
export const url=new URL("../icons/stylus_fountain_pen.svg?v=85631fcb14c4f53261599e616fe2a5b54c7dd1a37821a4019a20768d4345fbb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
