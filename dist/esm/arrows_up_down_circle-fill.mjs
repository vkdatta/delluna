export const name="arrows_up_down_circle-fill";
export const id="dl_64c3db7fc35e4dc29e61";
export const url=new URL("../icons/A/arrows_up_down_circle-fill.svg?v=2a2ccad45b278d646b662283ec93d9aad86a7a7ca6c8a88ab9e97f6a54b0ce7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
