export const name="cell_tower-fill";
export const id="dl_f3ce78037c2e4939936d";
export const url=new URL("../icons/cell_tower-fill.svg?v=ef592db99e22340d95e2b246180e017acd8624cdf3fd1f5b8177830d062f88d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
