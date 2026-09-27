export const name="shapes-bold";
export const id="dl_89e71fedbfd265bb41f2";
export const url=new URL("../icons/shapes-bold.svg?v=d6b7d218617cf93fac737925b58b356f2fbcec681797a6ad3f3bfa96ba22a887",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
