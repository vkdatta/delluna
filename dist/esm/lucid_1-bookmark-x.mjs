export const name="lucid_1-bookmark-x";
export const id="dl_b76297e049874418942d";
export const url=new URL("../icons/lucid_1-bookmark-x.svg?v=7eb177e789d4770854f65908a4879e77bc6da3fc53dd26234e200899e51ea633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
