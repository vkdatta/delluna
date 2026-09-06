export const name="ear-bold";
export const id="dl_2e56dd4ccceb409f86ec";
export const url=new URL("../icons/ear-bold.svg?v=59e307243c1cc6f403957283fb82bc895d7ff213c7f04e3df18e2ed9c8b30d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
