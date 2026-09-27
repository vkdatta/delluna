export const name="dataset-fill";
export const id="dl_59c3d98ba12c8ab58e21";
export const url=new URL("../icons/dataset-fill.svg?v=8f6060838f34a1455928459bdb7ba838cad254afcf9b17d23502443e1227f215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
