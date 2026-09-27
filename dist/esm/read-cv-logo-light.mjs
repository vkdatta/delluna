export const name="read-cv-logo-light";
export const id="dl_378dae56d5ad4bfa85fc";
export const url=new URL("../icons/read-cv-logo-light.svg?v=344f3c80207a6a4cd29689cbcdc0ed25a01b8763fc82ab5c4bdf7a931f1a7d31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
