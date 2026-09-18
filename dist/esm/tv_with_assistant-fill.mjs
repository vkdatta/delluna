export const name="tv_with_assistant-fill";
export const id="dl_29195a63ce6b4e5dabca";
export const url=new URL("../icons/tv_with_assistant-fill.svg?v=f9ec1fed7fc65a6dcf12d5647ce168c77ef13eb84770485530a65a45cfa3a582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
