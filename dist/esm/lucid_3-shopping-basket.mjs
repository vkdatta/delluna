export const name="lucid_3-shopping-basket";
export const id="dl_af733b8082884e3d89fe";
export const url=new URL("../icons/lucid_3-shopping-basket.svg?v=9c1a8c461dd3d31e09884fb89d00c37b4c3a18ebe3bc36b5ac595ea87c52b1bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
