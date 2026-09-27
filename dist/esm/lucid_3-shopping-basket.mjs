export const name="lucid_3-shopping-basket";
export const id="dl_af733b8082884e3d89fe";
export const url=new URL("../icons/lucid_3-shopping-basket.svg?v=d8140bfac640acf3b8762e08df7c4e4a29f3690a589b7194f3ef75fe0a7bb1e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
