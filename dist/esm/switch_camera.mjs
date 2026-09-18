export const name="switch_camera";
export const id="dl_cd29510a8e1a4e2e8b33";
export const url=new URL("../icons/S/switch_camera.svg?v=1941c59d6777881eeef7fb0a7fa4b5ceb556f7ad82775ba5a4a7bcd760b59c7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
