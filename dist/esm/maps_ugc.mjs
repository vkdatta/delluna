export const name="maps_ugc";
export const id="dl_96a55239e7a238c4088e";
export const url=new URL("../icons/maps_ugc.svg?v=f59d3b9e89dc5d627492034175999e590bb6c2df6d439ea6375cda47cb8e4f5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
