export const name="wifi-medium-fill";
export const id="dl_d55e55f3939349ec904e";
export const url=new URL("../icons/W/wifi-medium-fill.svg?v=f5dc711fe9e67bad9b4522b4be8ca8b6b3d9483fc8fa1d3129906498a6648993",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
