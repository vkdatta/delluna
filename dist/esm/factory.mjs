export const name="factory";
export const id="dl_b9c435d1ec4e44d8985b";
export const url=new URL("../icons/factory.svg?v=d9091d667660ce192f28657e6176f12d5a91f9aa098702249fbef85590ab0073",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
