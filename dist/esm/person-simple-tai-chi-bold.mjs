export const name="person-simple-tai-chi-bold";
export const id="dl_c1db6ff9486a418183de";
export const url=new URL("../icons/person-simple-tai-chi-bold.svg?v=d95d3adb281d7ea2b9b4bd4f39dd6f40985c537e846225a7ea56bdcbc7fcb489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
