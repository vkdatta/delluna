export const name="tools_installation_kit";
export const id="dl_7ab5457036524ef0ba1e";
export const url=new URL("../icons/tools_installation_kit.svg?v=9649f841bcff6eab9d8bb23549bcde7f74d3e9f5858ed50f7a479da53ae3bb73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
