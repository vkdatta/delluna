export const name="octagon-fill";
export const id="dl_8acb6c3d4fa54970808f";
export const url=new URL("../icons/octagon-fill.svg?v=3bdfde3bd4fe70622d260a77d24999f740af698fa61130efbee595c3e3e9ea0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
