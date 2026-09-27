export const name="vertical_shades-fill";
export const id="dl_5e87d5b6ac165847da56";
export const url=new URL("../icons/vertical_shades-fill.svg?v=28e92c7c25bcbb017af567eb44c192abf9af8a764cb98807794386f5c531949b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
