export const name="minus";
export const id="dl_ad8b49287b72486ab025";
export const url=new URL("../icons/minus.svg?v=582680dc3d1136208a22c80dbb3129365a94eeed2cb45f02bbe15df901920b86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
