export const name="rewind-circle-fill";
export const id="dl_958c4a8b88ef4443ab61";
export const url=new URL("../icons/rewind-circle-fill.svg?v=e386675883d4e1695c79b6d5b1b4ca3f95592b5d65ad3bd2dacda4799c9017c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
