export const name="avg_pace";
export const id="dl_36b397c2998e141eef12";
export const url=new URL("../icons/avg_pace.svg?v=da85ae74ce85c7fa739992c51f25023a3e091bdce5d7ee6e869c89229f0167eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
