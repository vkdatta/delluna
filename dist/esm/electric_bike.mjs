export const name="electric_bike";
export const id="dl_e7cfdaf9badd90d8b4be";
export const url=new URL("../icons/electric_bike.svg?v=4cd3bdd23d5ab97959e39eef11b7a9bb26d67d70cdb82ec87eba0256bfb9944b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
