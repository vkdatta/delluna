export const name="lucid_3-music";
export const id="dl_e0ee30c8541146b3b5ca";
export const url=new URL("../icons/lucid_3-music.svg?v=e4c32715e9dd70c654075a120124033e2f8b47f3e18cfd5113dd8a50b9067186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
