export const name="video_call-fill";
export const id="dl_a5af0970b4c7d1dbaa41";
export const url=new URL("../icons/video_call-fill.svg?v=af9c8e084e7cd7dcbc7e0edf4b33abd2a2ae425a94805563e694c78dec4ad8b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
