export const name="select_to_speak";
export const id="dl_a25ad6ab5664f941e13c";
export const url=new URL("../icons/select_to_speak.svg?v=ae21e97620c341132890662ece0509f7ed91cab09c7749dbe5166a2485e5b26f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
