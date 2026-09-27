export const name="directions_alt";
export const id="dl_45f0f5cc5d6f2fe64646";
export const url=new URL("../icons/directions_alt.svg?v=c79797608a496782cf4918d36eb37c8f28fa3b9a98be341efe7b0ca24dc3eacb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
