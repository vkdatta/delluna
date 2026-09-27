export const name="plug-charging-bold";
export const id="dl_49e9b8e482ac4586ba76";
export const url=new URL("../icons/plug-charging-bold.svg?v=74b562b29cf8a9fe5ae728f772820ee815d7ccce35505852ac9840ef366a402d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
