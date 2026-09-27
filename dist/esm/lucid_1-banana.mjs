export const name="lucid_1-banana";
export const id="dl_f222c1590462433ea979";
export const url=new URL("../icons/lucid_1-banana.svg?v=edf01d82f1f3b053a1b824f82cf8e4504612681305c2a27b7d6adcc8123de773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
