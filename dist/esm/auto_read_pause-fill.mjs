export const name="auto_read_pause-fill";
export const id="dl_d4fd67045621f80b4f65";
export const url=new URL("../icons/auto_read_pause-fill.svg?v=7ec8fa43b8e4dffe6274671e2813a95b25b68770cf3e51be927c1768244ea0e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
