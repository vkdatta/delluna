export const name="pix-logo-thin";
export const id="dl_90e1b7a018cc4c61a7f8";
export const url=new URL("../icons/pix-logo-thin.svg?v=0f90b3b4a6df6ff7d5df4bf5bd3d660f9c54fa37b3134258c6c549ba3d890fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
