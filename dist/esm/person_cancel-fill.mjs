export const name="person_cancel-fill";
export const id="dl_0961d6c61c534f2d9e66";
export const url=new URL("../icons/person_cancel-fill.svg?v=6906669779740aa265b1d733fe8cb011dbb00acfb495c43f114606326aa8c803",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
