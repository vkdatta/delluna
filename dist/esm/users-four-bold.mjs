export const name="users-four-bold";
export const id="dl_6e07e43cb54173ff1b1a";
export const url=new URL("../icons/users-four-bold.svg?v=21619590bf76260b7e4a51245120ed263d081893d3b419a46fc3e74b1bd7c00a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
