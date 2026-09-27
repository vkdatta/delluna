export const name="park-bold";
export const id="dl_121f97cecf4446fc8e58";
export const url=new URL("../icons/park-bold.svg?v=437c3852ce7a7e999ead3e82056c891cd6d4bdbd3d085872cd4963bfd38dd170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
