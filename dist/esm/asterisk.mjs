export const name="asterisk";
export const id="dl_fcbd30a5889f4244a7d2";
export const url=new URL("../icons/asterisk.svg?v=e74c231153f4f81ea199822ee6c07dc198a8c4750ea7d0cffb140b61fc4d50bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
