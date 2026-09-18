export const name="play_disabled";
export const id="dl_fd9c62d7a4af4c3aa9e7";
export const url=new URL("../icons/play_disabled.svg?v=132092826cafff13b0076d3e1595947802a30658271c847a8c57da7faf4d992c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
