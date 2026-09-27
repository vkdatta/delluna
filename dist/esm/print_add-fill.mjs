export const name="print_add-fill";
export const id="dl_0126e6cef41f2772dc3b";
export const url=new URL("../icons/print_add-fill.svg?v=166e39fbdd91508a7cc0b5f4f8efdcd4748d917780c913a46ab39881da2b43d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
