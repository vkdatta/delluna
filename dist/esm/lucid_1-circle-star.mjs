export const name="lucid_1-circle-star";
export const id="dl_a35e201ba04a4e44a1b6";
export const url=new URL("../icons/lucid_1-circle-star.svg?v=974846ff07bbdf15a9d6917fd0032c4119441e4138d42691383a06c317675cba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
