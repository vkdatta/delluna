export const name="cloud_circle";
export const id="dl_ab8482f2be793c5ea2bf";
export const url=new URL("../icons/cloud_circle.svg?v=21ad6c814682c0a44cdad2599d8694bfbc1e25c9a8f103686686c750441a336c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
