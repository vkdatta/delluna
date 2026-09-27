export const name="toggle_off";
export const id="dl_44369e5f412cb1b295b9";
export const url=new URL("../icons/toggle_off.svg?v=080df2e51c9a94176391f6d2006800ab3f53ee339cf40b1f8e7d139d2db6950a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
