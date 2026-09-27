export const name="square-sigma";
export const id="dl_f9903258a8ab439a9f5d";
export const url=new URL("../icons/square-sigma.svg?v=522e4bf6a376d0885f8106da7624861d9d8b2f8b093c0a0aeedb97d3e1847cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
