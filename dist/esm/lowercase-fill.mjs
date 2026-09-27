export const name="lowercase-fill";
export const id="dl_a453f93ac15086f682ed";
export const url=new URL("../icons/lowercase-fill.svg?v=d494d0dbf4ee3f41408de4400c176e071b78d97c64fe05288167e7727de2f52f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
