export const name="lucid_3-pyramid";
export const id="dl_22d280d58bed4305b184";
export const url=new URL("../icons/lucid_3-pyramid.svg?v=639f85087b7cd2efe9d4338a6a25648e8f9b606da2d3900024c14c186b9f4706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
