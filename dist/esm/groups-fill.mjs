export const name="groups-fill";
export const id="dl_1a7cb120e47466cd7c0c";
export const url=new URL("../icons/groups-fill.svg?v=10692d4a2212d920fea10ce4e9bb207c17b495855ef9ab8d63224cfd8b42ffb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
