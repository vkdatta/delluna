export const name="camera_roll-fill";
export const id="dl_d260dd8502ee31379256";
export const url=new URL("../icons/camera_roll-fill.svg?v=326f7d0f5e54fcdb9542c158a539b6dbe100cfbe1055f404c23782bfdc722ddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
