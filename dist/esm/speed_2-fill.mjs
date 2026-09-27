export const name="speed_2-fill";
export const id="dl_0d3fa3ec7456b33999f1";
export const url=new URL("../icons/speed_2-fill.svg?v=6f6671f2915b46b0994fd4191ff6460677f86743e586ededccc420e808d4f451",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
