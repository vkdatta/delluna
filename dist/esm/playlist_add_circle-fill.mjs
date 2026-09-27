export const name="playlist_add_circle-fill";
export const id="dl_27db64c1d60af1c5c0d0";
export const url=new URL("../icons/playlist_add_circle-fill.svg?v=b2398746c1d5b6aac7cdbadc88f0a18c00d1ab694c7d02972007824253352274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
