export const name="solar-panel-light";
export const id="dl_4260cd3d957b8f10b9c9";
export const url=new URL("../icons/solar-panel-light.svg?v=ffa4f20500d0bedc65eae079266e448dbe63dab267446ae0587c232f593ab780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
