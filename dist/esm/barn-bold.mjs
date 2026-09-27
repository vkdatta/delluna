export const name="barn-bold";
export const id="dl_3c2e6eee6e184df2b68b";
export const url=new URL("../icons/barn-bold.svg?v=4302dd1c6d792833a84639a117e8efe61b1288d2aeae3be0634ef7663491371d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
