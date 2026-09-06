export const name="nuclear-plant-light";
export const id="dl_4170b3336ed44ad5bbc8";
export const url=new URL("../icons/nuclear-plant-light.svg?v=4400469eaabae153a3d5355191889929ba27316a4327010200858e13e9e680f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
