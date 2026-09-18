export const name="stop_circle";
export const id="dl_e648a642713d4755a9ae";
export const url=new URL("../icons/stop_circle.svg?v=b941e0d3c30b705779ef617fd4a2fc793abdb54b1893bcc9a32750d3d7b9d8b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
