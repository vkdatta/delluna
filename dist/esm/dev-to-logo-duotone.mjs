export const name="dev-to-logo-duotone";
export const id="dl_0323ab13b7044abeb21b";
export const url=new URL("../icons/dev-to-logo-duotone.svg?v=d5cf9a24176a069e8a4012a70e596db955d1d3372ea9f67e9ca81738b52ba9fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
