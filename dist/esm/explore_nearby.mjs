export const name="explore_nearby";
export const id="dl_31d7336bca0c4040b419";
export const url=new URL("../icons/explore_nearby.svg?v=d8ff2d8a755359b8e2d5fbfdf7adde86ee11e8ecb83cea3f8c59b8f76eeeec92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
