export const name="audio_file-fill";
export const id="dl_81216bf4d93f8a504338";
export const url=new URL("../icons/audio_file-fill.svg?v=61bc72fdf177e38e778372a8e13fbec6f83ea841234749de607f06cecb591a91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
