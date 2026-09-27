export const name="sphere-fill";
export const id="dl_f8d2b24cd8fa668918ce";
export const url=new URL("../icons/sphere-fill.svg?v=dcbd9d508d761af4a32384170a3f0408cc7206e6af7cd79ae1586e754f9bc543",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
