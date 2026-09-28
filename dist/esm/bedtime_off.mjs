export const name="bedtime_off";
export const id="dl_697614c668ea96266eda";
export const url=new URL("../icons/bedtime_off.svg?v=2e1ee55d1a059b4414c6040463bc816f22b1cf6a2dd0c2e6d6899dc1e4ea4c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
