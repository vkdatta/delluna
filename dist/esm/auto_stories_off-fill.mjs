export const name="auto_stories_off-fill";
export const id="dl_f25b03a6b9545e0c8621";
export const url=new URL("../icons/auto_stories_off-fill.svg?v=ecfc6f571caccef180d1626f17df090819a165740aa7da6518f74a3d63d2e984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
