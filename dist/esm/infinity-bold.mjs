export const name="infinity-bold";
export const id="dl_d80ccf5a0b074477a4fb";
export const url=new URL("../icons/infinity-bold.svg?v=9cf31f78f837cf734a4a05b73a5d9d3a252aed00401d7c26d3906c6a621f9d63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
