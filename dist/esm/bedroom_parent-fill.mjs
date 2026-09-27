export const name="bedroom_parent-fill";
export const id="dl_4a3ab1803f2406eec95e";
export const url=new URL("../icons/bedroom_parent-fill.svg?v=80433c8a7bcb3065506f70fad5851ce746b19b2486b7275c17cb48be2e232097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
