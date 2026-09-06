export const name="faders";
export const id="dl_ca3daa7feb6d4a3d862c";
export const url=new URL("../icons/faders.svg?v=18344f92122bc39bb1975f9f27af332f9f68b7f2d7262dabfce37e8e56042de9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
