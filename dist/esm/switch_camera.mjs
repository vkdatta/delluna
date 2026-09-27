export const name="switch_camera";
export const id="dl_b34dd5bc07e4bfbdfa92";
export const url=new URL("../icons/switch_camera.svg?v=32d01fb784737c50a82c383e53095b7b53411a6cdfc21c7bf345bb76c842db94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
