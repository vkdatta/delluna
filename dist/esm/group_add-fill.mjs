export const name="group_add-fill";
export const id="dl_3208bb74ea51494a833f";
export const url=new URL("../icons/G/group_add-fill.svg?v=002bd7ae645d1c54fffd7ec46c2ed1e9848c8d2af00ac18e4734ac4be0a74347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
