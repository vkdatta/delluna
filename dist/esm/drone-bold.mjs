export const name="drone-bold";
export const id="dl_1b0d2f07217c41a29c81";
export const url=new URL("../icons/drone-bold.svg?v=8d64ffde7aaf2abb3a48417d2ac675db624342d89cd4fd287ed6d64953525c27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
