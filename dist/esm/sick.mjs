export const name="sick";
export const id="dl_7f1a2e30814b327bd29d";
export const url=new URL("../icons/sick.svg?v=7b0bde32f1fc13eeffc783e6591739e07df3b0934414ceee1b7c3d91f0af8e1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
