export const name="rotate_90_degrees_cw";
export const id="dl_64216529675523f7a7a2";
export const url=new URL("../icons/rotate_90_degrees_cw.svg?v=8aaa13277843ad1bb05a5c6f7f71a3e823a34d88d607bfab4d1570a228160407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
