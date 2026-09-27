export const name="open_jam-fill";
export const id="dl_90f763f0144f6b328d56";
export const url=new URL("../icons/open_jam-fill.svg?v=f0ff9bf92f524a3a75968998d4dd22f03239ee9323b4343b43411d22dc29d2fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
