export const name="playlist-thin";
export const id="dl_2d66cafa3b944ad58e2e";
export const url=new URL("../icons/playlist-thin.svg?v=ad74247526416c156b6970c31676edf37c1882be9ac4fdb4f48edda774ccfbcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
