export const name="lucid_2-hand-helping";
export const id="dl_8f63b8600ada4d209218";
export const url=new URL("../icons/lucid_2-hand-helping.svg?v=b8f0a4d40caf928ef9dd8534fe1f0520553527099b35ef088a1fce50ba56e4a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
