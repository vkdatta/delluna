export const name="frame_reload-fill";
export const id="dl_6b141c9ac6c5d0ce2c26";
export const url=new URL("../icons/frame_reload-fill.svg?v=1d72fd765dc2088ac6f3d80c17d4c19f0ecefaae9db317957dfb2b101cd990ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
