export const name="shield-duotone";
export const id="dl_901b78841203b1dca9ee";
export const url=new URL("../icons/shield-duotone.svg?v=978599af811f72eecf120c7b7da931489f3c09c80728a2b6e33b529bc426ab2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
