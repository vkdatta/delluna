export const name="scene-fill";
export const id="dl_aef84331ed594ef195a8";
export const url=new URL("../icons/scene-fill.svg?v=cfeea66fee1ed15fb591f36310cd8004b27d75dfff130de231fd5f155ca7abf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
