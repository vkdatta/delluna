export const name="arrow-line-down-fill";
export const id="dl_545a4847048a42a4ad55";
export const url=new URL("../icons/arrow-line-down-fill.svg?v=12b1eb85a4967aa7718a4f74a4fcb0f2c2161dbeb565cd029837242c4c50a124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
