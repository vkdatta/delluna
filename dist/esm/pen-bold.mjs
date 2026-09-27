export const name="pen-bold";
export const id="dl_9ff7a927c58c4ea4a6ea";
export const url=new URL("../icons/pen-bold.svg?v=8cab1ab7668c1acd5865b36124d3b3dbac80eb4b2f19638f74eb1fd3b12d7e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
