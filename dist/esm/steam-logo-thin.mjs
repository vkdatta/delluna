export const name="steam-logo-thin";
export const id="dl_b4fb318bd4b34e9a9333";
export const url=new URL("../icons/S/steam-logo-thin.svg?v=48a7d4ce3d351ed9d02951797e5c88acd961e97aca3def7107f928a3510ced4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
