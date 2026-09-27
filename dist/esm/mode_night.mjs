export const name="mode_night";
export const id="dl_f4c5ee49f5d967aa06d1";
export const url=new URL("../icons/mode_night.svg?v=432cb97790949818d021b90bbe27f9e5b0f8d4adfcf9d9fe6761b12576b419c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
