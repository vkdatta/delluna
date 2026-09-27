export const name="featured_video";
export const id="dl_09fcb1d8e47925196ec9";
export const url=new URL("../icons/featured_video.svg?v=fa08eb774348b3377cb66af0abe3b9b821914216da4be4fa12e5d2db1971fb04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
