export const name="watch_arrow-fill";
export const id="dl_d3a74a73aad012aa0123";
export const url=new URL("../icons/watch_arrow-fill.svg?v=001310f91ca5a4a526cc0eb5740747591764f4374950d5da7d8904b12297fa7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
