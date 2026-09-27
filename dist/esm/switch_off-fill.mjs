export const name="switch_off-fill";
export const id="dl_1d088689f11f4bc6e687";
export const url=new URL("../icons/switch_off-fill.svg?v=611dbcd924c2c565275f27b655591d312a020d90768d069091221e7213ace224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
