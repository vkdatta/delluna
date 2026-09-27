export const name="vrpano";
export const id="dl_7a5879d5f82cb99a9377";
export const url=new URL("../icons/vrpano.svg?v=2b95af9bb97a7fbcb9c6a94a6e6346a8cde5109f068c7ed47eeca05dda88527b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
