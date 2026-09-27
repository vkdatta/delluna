export const name="directions_alt-fill";
export const id="dl_06d94a13be7e98b1dd06";
export const url=new URL("../icons/directions_alt-fill.svg?v=a33e25be8de871a2c273cfb7498316d5740080e663aecd9a4c0afdb4b6f4e572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
