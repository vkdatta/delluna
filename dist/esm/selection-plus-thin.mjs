export const name="selection-plus-thin";
export const id="dl_63a4531a9b82561a0646";
export const url=new URL("../icons/selection-plus-thin.svg?v=df5cac8b43fc4364a1753ea8db5e5d441a513e29f267e113a0ec4c70599a5e6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
