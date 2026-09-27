export const name="lucid_1-calendar-clock";
export const id="dl_007297fd1391493da0bc";
export const url=new URL("../icons/lucid_1-calendar-clock.svg?v=55d92b66200e55e872e51ae42be0f37fd9f370bf6750580334dc842282adedda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
