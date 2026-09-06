export const name="volume-off";
export const id="dl_00e60c8fe9d849d89d4d";
export const url=new URL("../icons/volume-off.svg?v=f248aa2a15e7558e136c6d1ab6167d0df8e0ac1d6183e3d3065f5dd3fdb89c43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
