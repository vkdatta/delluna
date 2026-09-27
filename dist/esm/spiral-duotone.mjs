export const name="spiral-duotone";
export const id="dl_07bdb52eb7a2ac86a825";
export const url=new URL("../icons/spiral-duotone.svg?v=7322339c3521faaee8ad053a7e00ec97424e3c9b72e8fc5e7b9c3479783d3d1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
