export const name="robot_2-fill";
export const id="dl_69af722db29be1fa8baf";
export const url=new URL("../icons/robot_2-fill.svg?v=c96f7f22303b2956111a6ba7c1f1cc5df0ff8b80c32d6853328e946e3e50b7db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
