export const name="polymer-fill";
export const id="dl_6ceeae81b0f7840c62a7";
export const url=new URL("../icons/polymer-fill.svg?v=9179a7550ed9ad4fdf16f778709e0493dc29ca1da832fc2e3cbceabbacba187e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
