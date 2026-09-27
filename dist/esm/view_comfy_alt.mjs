export const name="view_comfy_alt";
export const id="dl_39aa96627707a5114220";
export const url=new URL("../icons/view_comfy_alt.svg?v=64649063da37b20c977c819a381fc7762637babd35c64e2ddbd2d7169becb254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
