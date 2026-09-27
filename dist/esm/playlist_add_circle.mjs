export const name="playlist_add_circle";
export const id="dl_c2b992a1b6aa0ea6767f";
export const url=new URL("../icons/playlist_add_circle.svg?v=43bf3af45b8d84ab9479fb85a6f7ea26f8c8755c91d7995d3f88ddc738a117d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
