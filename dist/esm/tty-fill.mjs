export const name="tty-fill";
export const id="dl_564e3eea01c4be6a6175";
export const url=new URL("../icons/tty-fill.svg?v=14b597b3c41d135583039d2ad138759d58d9d256628dafb121ae275a2f2c595e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
