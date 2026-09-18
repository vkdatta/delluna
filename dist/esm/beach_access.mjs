export const name="beach_access";
export const id="dl_643d5d1032444db2907a";
export const url=new URL("../icons/beach_access.svg?v=839651f400fe4a0433d243215414990aee943e28e4077a61a0ab2915f86dc202",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
