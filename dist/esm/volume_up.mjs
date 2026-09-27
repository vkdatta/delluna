export const name="volume_up";
export const id="dl_59d523671c2f03886e8a";
export const url=new URL("../icons/volume_up.svg?v=34a04172f9cdecf5c4287ebd9e584c095b8bcf5c9f9d94143933b693ee3d4a80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
