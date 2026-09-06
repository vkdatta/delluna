export const name="lock-simple-open-bold";
export const id="dl_bf7b57bddd7548719a20";
export const url=new URL("../icons/lock-simple-open-bold.svg?v=0fe1aa4fa99db2a2fe0827626eeb779a5a398763ba2492a0cf9429f9cdeca6c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
