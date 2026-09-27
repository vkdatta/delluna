export const name="candle";
export const id="dl_4f06d8cdd4249ab37639";
export const url=new URL("../icons/candle.svg?v=91df90bf04612cbed9d39a4d15914366b0e5ba841098a2f127818b8cd924f89e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
