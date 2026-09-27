export const name="wifi-medium-light";
export const id="dl_a3b64a503e9a646ae37d";
export const url=new URL("../icons/wifi-medium-light.svg?v=5c399a58cf3e4bb14cf31990fd2d1d0d38b59fb0c4dbe2ef7a787078473f7103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
