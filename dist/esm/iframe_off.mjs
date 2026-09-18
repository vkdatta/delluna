export const name="iframe_off";
export const id="dl_b92a64f83130423ab5da";
export const url=new URL("../icons/iframe_off.svg?v=8f5a74eb756d07dd921d9a34c964ac408979831f29d2d5539d4aafb36ad55eab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
