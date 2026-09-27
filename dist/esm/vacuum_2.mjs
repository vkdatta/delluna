export const name="vacuum_2";
export const id="dl_d6454dba9d5cc57567a1";
export const url=new URL("../icons/vacuum_2.svg?v=d01a983bb1cb328f1b3adde24bedb5d9c2a4445bcc151087dec45e9d47cd55c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
