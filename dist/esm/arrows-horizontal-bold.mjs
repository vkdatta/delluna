export const name="arrows-horizontal-bold";
export const id="dl_40c12dadfcbb41bd8477";
export const url=new URL("../icons/arrows-horizontal-bold.svg?v=f74a2ec405bea80c587a2c320a1198aaee0eebdd5406051e273f077488f41e9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
