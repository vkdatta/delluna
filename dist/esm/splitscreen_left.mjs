export const name="splitscreen_left";
export const id="dl_33f937ad6c61e030847a";
export const url=new URL("../icons/splitscreen_left.svg?v=7510d7efa0545bcb56e6a672998630e9206dfe2e7240aaeefc31eaba0c3689fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
