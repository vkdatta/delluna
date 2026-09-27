export const name="24fps_select";
export const id="dl_272d822e74204a85c07c";
export const url=new URL("../icons/24fps_select.svg?v=1392d5093a5f28ae3ab4a3d6416d7c38531e1d04318d12708e09a7a32adacd80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
