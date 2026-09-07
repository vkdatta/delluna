export const name="camera-light";
export const id="dl_450445ae88e34e048c47";
export const url=new URL("../icons/camera-light.svg?v=30a9a9b0ed639882520eb3a603ef81fec2a5cc66c7e395fc5bcfd0121132d1d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
