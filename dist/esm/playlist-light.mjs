export const name="playlist-light";
export const id="dl_e1cf2b99ef5c4fd7bd11";
export const url=new URL("../icons/playlist-light.svg?v=763e2e0459fb93caa86cd790971dbf7cf590ea94ef245026e8aebb7f3ec3e0bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
