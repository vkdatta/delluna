export const name="stop-circle-thin";
export const id="dl_15dc882cb9b484b5b652";
export const url=new URL("../icons/stop-circle-thin.svg?v=0f700da74d4d0c53b9c0338bacdebca3f278c244457ced285cb7c2f5348c7433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
