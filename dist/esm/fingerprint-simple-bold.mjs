export const name="fingerprint-simple-bold";
export const id="dl_6fe774449f934dcfba1c";
export const url=new URL("../icons/fingerprint-simple-bold.svg?v=531e56f8ddd863ef826b53f8095e3ee847feef3766b2a302c1281f2bd1822b93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
