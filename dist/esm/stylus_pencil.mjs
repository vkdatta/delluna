export const name="stylus_pencil";
export const id="dl_a07c2fa9197958872017";
export const url=new URL("../icons/stylus_pencil.svg?v=525fccffb2a800d542fa4b77e995efe214368f713a505711ae5a85d46afd44f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
