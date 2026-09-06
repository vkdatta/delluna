export const name="number-square-three-thin";
export const id="dl_e46e503ae74045e1a2dc";
export const url=new URL("../icons/number-square-three-thin.svg?v=52eea1b3b1774884a18df755f273f1a828da504996f1173b346be3d4c8605f59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
