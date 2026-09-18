export const name="send_time_extension-fill";
export const id="dl_aa2f2bef91f84896a7ee";
export const url=new URL("../icons/S/send_time_extension-fill.svg?v=c8a969a5d06f57fa888ef230c0854b7969effb72ae6625f29c3b2485f4658108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
