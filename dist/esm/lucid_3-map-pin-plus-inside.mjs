export const name="lucid_3-map-pin-plus-inside";
export const id="dl_6ceee32f84b9495e9bcc";
export const url=new URL("../icons/lucid_3-map-pin-plus-inside.svg?v=0f7c673a6ed5311c993f917bc945f2c395ad06b40d236064fff1a02e55ef8dde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
