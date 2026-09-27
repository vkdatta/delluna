export const name="photo_frame";
export const id="dl_0cc46fa556dd0eeede9c";
export const url=new URL("../icons/photo_frame.svg?v=cbfadcd6e379ad39b20ca7b2f109de5e4d13b1c11dfce52ee21fa4498234a2bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
