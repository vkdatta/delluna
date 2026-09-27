export const name="vital_signs-fill";
export const id="dl_d3c8d5aa9107ed34bccb";
export const url=new URL("../icons/vital_signs-fill.svg?v=96336dc281abaf037c39b0bf1189766e5c2cb85fec62731f61540f919606885a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
