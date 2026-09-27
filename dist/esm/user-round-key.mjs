export const name="user-round-key";
export const id="dl_fe4d5d0045d64fd9a895";
export const url=new URL("../icons/user-round-key.svg?v=fcaed39eb946d9ca2b33377517e18b328a6704982b22b730fa58d00eabaacfac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
