export const name="crown-simple-bold";
export const id="dl_c9dbf1a3b912400bb0d7";
export const url=new URL("../icons/crown-simple-bold.svg?v=be58b22ea91298a72bc9126fc29f5e4c915985532c01213d1b782ac09df4cf68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
