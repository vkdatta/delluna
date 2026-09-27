export const name="4g_mobiledata";
export const id="dl_8089b7d7a7e633cf1cf8";
export const url=new URL("../icons/4g_mobiledata.svg?v=94194f2686612d3e2ed56bb03a6a6f4a8c5e0fa831230f143d493f8754b8bb56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
