export const name="arrow-down-left-thin";
export const id="dl_f483f67a7c814875857d";
export const url=new URL("../icons/arrow-down-left-thin.svg?v=d6b8833ef509613cd0fc9e112f7af9be3a1bae80643f0a6bdf292c356e663671",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
