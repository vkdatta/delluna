export const name="shuffle-duotone";
export const id="dl_b9046f9891d043759aa6";
export const url=new URL("../icons/shuffle-duotone.svg?v=e65af5a30e9b3cccd4602d34ae6361942b6774a5d1e079510591587a2d9acd7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
