export const name="warning-octagon-fill";
export const id="dl_39626222e7dfb079756c";
export const url=new URL("../icons/warning-octagon-fill.svg?v=20920b216595f985ae8e871d31f0efc43dea3ed3b46878a8335df4d802e11b25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
