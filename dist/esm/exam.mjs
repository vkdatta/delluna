export const name="exam";
export const id="dl_c508a0ed4f464588bd15";
export const url=new URL("../icons/exam.svg?v=54a70dcd5ba59f539e5b2500efa8280b0d3fe0408a128881ad95967d8099d34e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
