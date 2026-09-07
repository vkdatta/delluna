export const name="user-circle-bold";
export const id="dl_ac0bcd12ee544a378853";
export const url=new URL("../icons/U/user-circle-bold.svg?v=fb8674723397155e46003ed181259e4400c12512b8f0285e8d163e536088f96c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
