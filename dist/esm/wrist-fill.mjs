export const name="wrist-fill";
export const id="dl_cd934ae374f9c831c8d4";
export const url=new URL("../icons/wrist-fill.svg?v=2f069e839321f53019f4d1e74658b2bffbc5cf5f6da8909e92ed47c14ca137ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
