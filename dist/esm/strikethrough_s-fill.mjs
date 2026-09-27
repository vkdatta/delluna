export const name="strikethrough_s-fill";
export const id="dl_8258a5dc6c65953ad4b7";
export const url=new URL("../icons/strikethrough_s-fill.svg?v=27c21faa108efea8abdf4691892f2cf66837805054ce0240baec3603cedb6a07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
