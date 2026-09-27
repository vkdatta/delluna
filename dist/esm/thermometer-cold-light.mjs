export const name="thermometer-cold-light";
export const id="dl_189a8dd0ca5fdb60f5b4";
export const url=new URL("../icons/thermometer-cold-light.svg?v=fd69c2d9af41c32a61ce1ebe0d89e23ac8c1c1d4d653bcfa0eaa24ef804814d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
