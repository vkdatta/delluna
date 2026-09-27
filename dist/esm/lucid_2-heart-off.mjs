export const name="lucid_2-heart-off";
export const id="dl_60d2d45fdfb14030af41";
export const url=new URL("../icons/lucid_2-heart-off.svg?v=a550032df03288c8be06f2a988faabb15e4b12ae0f4c52087607d4ba9b629c40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
