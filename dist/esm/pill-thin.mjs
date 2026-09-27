export const name="pill-thin";
export const id="dl_2e41fb7d17f848a0bd72";
export const url=new URL("../icons/pill-thin.svg?v=f0ed4c6cdd8509a7c8ca08633da894439d4a8e54e5c94bc167ca36bafb6da264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
