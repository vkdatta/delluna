export const name="tire_repair";
export const id="dl_4638427f4d4c1cfe31f0";
export const url=new URL("../icons/tire_repair.svg?v=dd2c60ea98a709e60b05e7c31c8a5e32c23d61f785e1a99841397ec74a69e983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
