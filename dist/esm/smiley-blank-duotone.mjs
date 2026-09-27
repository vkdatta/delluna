export const name="smiley-blank-duotone";
export const id="dl_a569c61ae739fb798bd1";
export const url=new URL("../icons/smiley-blank-duotone.svg?v=b176dff5c7c7504e3dafbe6d3851c154816df3c1b0be2329a70724a3600b27d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
