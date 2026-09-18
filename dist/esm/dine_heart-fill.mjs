export const name="dine_heart-fill";
export const id="dl_e31ae12608c749d287f9";
export const url=new URL("../icons/dine_heart-fill.svg?v=294e8c89192c76f655024c764985f589b199057ac45cf189f5531c1bc2c50421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
