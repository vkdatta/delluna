export const name="lucid_1-circle-star";
export const id="dl_a35e201ba04a4e44a1b6";
export const url=new URL("../icons/lucid_1-circle-star.svg?v=22a55a1374c1db076ffd9c3628dba1fb65cc4185dc16ffb6731bb38567e299cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
