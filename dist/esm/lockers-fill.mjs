export const name="lockers-fill";
export const id="dl_7d5735d972ef44a08519";
export const url=new URL("../icons/lockers-fill.svg?v=ea56d20e792fa624f95728b14942a32ee63d631ea492c60e7a667004a74f0a72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
