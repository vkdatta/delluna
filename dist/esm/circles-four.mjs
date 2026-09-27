export const name="circles-four";
export const id="dl_8bc93d5cd185472b8413";
export const url=new URL("../icons/circles-four.svg?v=9382f39f6aa6e2af77daaab7552cdc6c98f1ebe212e0221e76c580585fbe17fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
