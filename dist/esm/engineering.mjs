export const name="engineering";
export const id="dl_863c15c816a1a4ae28f1";
export const url=new URL("../icons/engineering.svg?v=c72e1e257d50113983fb8f4ab49400673af66fc5b646659f54b1fd89b1554787",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
