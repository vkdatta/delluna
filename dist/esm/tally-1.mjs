export const name="tally-1";
export const id="dl_4d5039e8d19e4d4db50c";
export const url=new URL("../icons/tally-1.svg?v=7142ebd433d26e2a4eb28e4830376c1beaf36ea30ba83e0063b471825d24c203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
