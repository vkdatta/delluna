export const name="star-four-bold";
export const id="dl_297bbe026bcf5e682145";
export const url=new URL("../icons/star-four-bold.svg?v=eac19be1a10a2c92acb75fb086ffe46773683620bbf004452593cb2ebe1221a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
