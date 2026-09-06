export const name="dice-six-light";
export const id="dl_84672846a9d94226a42f";
export const url=new URL("../icons/dice-six-light.svg?v=250f91f230dbeaa58e9b8bdd79c1834571cd3868dacf28d756035793126716af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
