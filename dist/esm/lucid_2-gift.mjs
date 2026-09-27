export const name="lucid_2-gift";
export const id="dl_c308e3a8301a4b9b8b77";
export const url=new URL("../icons/lucid_2-gift.svg?v=4ccbff7b9b0aca0b7b548abb0be8ef9992b1467bf501b0075e751f4b0ffce918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
