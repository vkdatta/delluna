export const name="face_2-fill";
export const id="dl_72f723b0259f4c478c1d";
export const url=new URL("../icons/F/face_2-fill.svg?v=fdfbb3d927d646768fda82f3ad37b9b0ea5718ee956929d0a47921444061c9b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
