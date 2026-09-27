export const name="spotify-logo-light";
export const id="dl_f316a55eef32b980b04b";
export const url=new URL("../icons/spotify-logo-light.svg?v=bc254c4ad65fbae460c734704dc9554845f810855e5b0c3546ca7cf00f0fc848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
