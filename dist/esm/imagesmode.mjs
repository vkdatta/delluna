export const name="imagesmode";
export const id="dl_21dcd81a1a2f4fbb2d4f";
export const url=new URL("../icons/imagesmode.svg?v=ea77b0d810eba3c10cd44b2594b8c928ec89f78925810bec24a08f856e0b0420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
