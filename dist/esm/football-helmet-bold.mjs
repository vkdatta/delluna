export const name="football-helmet-bold";
export const id="dl_c48c02a370d2413890f1";
export const url=new URL("../icons/football-helmet-bold.svg?v=9dd4576e66f9dc7119c1f6d0627043831cb9ad56dd8694ae20c4d4aeabcc14a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
