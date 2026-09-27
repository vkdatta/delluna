export const name="lucid_1-arrow-right-from-line";
export const id="dl_ecd05a2706f54968aa92";
export const url=new URL("../icons/lucid_1-arrow-right-from-line.svg?v=877f168e90c00164cab06f6f880e28f8e6004117031a11f8f2ac344af2ffff6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
