export const name="looks_6";
export const id="dl_ea1be6b505924569a56f";
export const url=new URL("../icons/looks_6.svg?v=0ed4487905409814e74416541cf899e510827f251bac93cb8e430da93a5f97c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
