export const name="lockers-bold";
export const id="dl_95a6a3a0dc61471284c8";
export const url=new URL("../icons/lockers-bold.svg?v=12c4ad63da7826ad7dcaca26094cbfc35aa728a5ed40844eab2462c0174ceffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
