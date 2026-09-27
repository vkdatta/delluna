export const name="splitscreen_portrait-fill";
export const id="dl_cef3a3b37b4d675b597f";
export const url=new URL("../icons/splitscreen_portrait-fill.svg?v=415bc61ce75efe333e6a77cda55ca630ec093d212403070ac79bfb86c98f732e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
