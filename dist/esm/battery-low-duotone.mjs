export const name="battery-low-duotone";
export const id="dl_07dc271656f84b428e75";
export const url=new URL("../icons/battery-low-duotone.svg?v=8baffc8cb3aeadb41c1f223db20108bb668a5594d0fc0de5a88467ec1871af0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
