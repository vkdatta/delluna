export const name="list-magnifying-glass-fill";
export const id="dl_00415ec723d64b72b1c9";
export const url=new URL("../icons/list-magnifying-glass-fill.svg?v=62aed5c4043454cb90c65626e4bc8a8c9500b142782739fef0b14698171be95a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
