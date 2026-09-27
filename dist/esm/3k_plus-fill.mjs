export const name="3k_plus-fill";
export const id="dl_5bb1b0804c963d57a81e";
export const url=new URL("../icons/3k_plus-fill.svg?v=2dd23b133c80dc41c04283a9af00a2cea73ff7cc48d3333db9de5d19f8f9e81a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
