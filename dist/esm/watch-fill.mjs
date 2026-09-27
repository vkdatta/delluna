export const name="watch-fill";
export const id="dl_3a891eec35bf4559d3cb";
export const url=new URL("../icons/watch-fill.svg?v=2873eaf68635a03c83ced0514db70eca0f363c03471e87e868c8e99ac6a6f4c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
