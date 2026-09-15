export const name="bookmark_flag";
export const id="dl_3004474228e5446e92e6";
export const url=new URL("../icons/B/bookmark_flag.svg?v=ed6a2011ceb1ceb11a3b8b9ce6ca782d0eba4045d629ab17fd454a8dfc12ac6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
