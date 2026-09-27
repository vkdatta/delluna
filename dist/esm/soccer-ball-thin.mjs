export const name="soccer-ball-thin";
export const id="dl_7207c15f5afc4d9c8ef6";
export const url=new URL("../icons/soccer-ball-thin.svg?v=b9c8d0465cee82f69ce5cb2ce9f73fad3a8fd79170dda2e2448da67559d36ef0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
