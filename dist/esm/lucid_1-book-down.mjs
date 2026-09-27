export const name="lucid_1-book-down";
export const id="dl_3d11390ebfcb49af8079";
export const url=new URL("../icons/lucid_1-book-down.svg?v=5969fe65f766565ffde13e01c4ea8be09c5ecea000f6410f98054679ff875f6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
