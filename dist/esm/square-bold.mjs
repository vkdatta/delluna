export const name="square-bold";
export const id="dl_4d2a8a6f3303747bb8b1";
export const url=new URL("../icons/square-bold.svg?v=547bff788073b3cc9a1bab42a3aae9e94e4d317b6d794437e6f41bd9f0ab6ace",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
