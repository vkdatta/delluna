export const name="settings_seating-fill";
export const id="dl_f0832280cc0c1b8bbc2e";
export const url=new URL("../icons/settings_seating-fill.svg?v=49642f4c30abfeeb647265538e1a756b00a83e75700cfdaf16070dc9b8d3681e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
