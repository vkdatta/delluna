export const name="video_stable";
export const id="dl_1c7220e53a83adfd0df7";
export const url=new URL("../icons/video_stable.svg?v=1b1b606abba66e34e95f7b397e512d41cfc6aff150e5db2839800d869d9759d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
