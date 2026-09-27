export const name="tooth-bold";
export const id="dl_4a53c8415ef8dee856ed";
export const url=new URL("../icons/tooth-bold.svg?v=a148a51b11937396196672e544f01f065cff452f9b9eee48c01c24174a5e8f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
