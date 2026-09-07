export const name="cheese-thin";
export const id="dl_125636cacf66482da056";
export const url=new URL("../icons/cheese-thin.svg?v=86ae6243e70dd638ad07d9da3b947df8104d6e3d82ae588cd82dee8d3a24abeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
