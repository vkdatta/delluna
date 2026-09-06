export const name="dots-three-vertical";
export const id="dl_1612067386004e3abbc5";
export const url=new URL("../icons/dots-three-vertical.svg?v=85fdecd2193efcd7e80a83607b66d2680fef8f3d1e93380c26f9851b24edbd01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
