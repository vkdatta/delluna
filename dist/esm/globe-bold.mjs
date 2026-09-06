export const name="globe-bold";
export const id="dl_41939bac5bdd41e5b2b2";
export const url=new URL("../icons/globe-bold.svg?v=b1dff2302e56cfc39cb704bb109486ee53d29a9a65f5a02f50e258259fbf743e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
