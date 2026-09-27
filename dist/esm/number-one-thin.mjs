export const name="number-one-thin";
export const id="dl_3efd37f5ac64457dba0d";
export const url=new URL("../icons/number-one-thin.svg?v=dc85c5e04d26d6263d747d580e2d09d102c911f2401df18cad8b83e413964fe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
