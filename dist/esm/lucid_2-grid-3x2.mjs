export const name="lucid_2-grid-3x2";
export const id="dl_fc74f1ed62ab444da7cb";
export const url=new URL("../icons/lucid_2-grid-3x2.svg?v=918a87712ae66c8a2007ef573a140a29fb3b9a76029266c5443be8729b00e3bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
