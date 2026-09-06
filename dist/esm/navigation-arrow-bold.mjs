export const name="navigation-arrow-bold";
export const id="dl_8503572e631d44e3bed6";
export const url=new URL("../icons/navigation-arrow-bold.svg?v=a8e9239759e0f33c92ae63f758f0304613eaf1f0279e5fc5f710e8d393345b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
