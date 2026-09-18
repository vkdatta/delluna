export const name="bedtime_off";
export const id="dl_6efc2ca5333b4c6ba01b";
export const url=new URL("../icons/bedtime_off.svg?v=2e1ee55d1a059b4414c6040463bc816f22b1cf6a2dd0c2e6d6899dc1e4ea4c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
