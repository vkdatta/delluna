export const name="where_to_vote";
export const id="dl_2a93dbba34b6ce222459";
export const url=new URL("../icons/where_to_vote.svg?v=ca582b0df1c3883fc354d595cb32a544e8ea265bfbb63cb29de1e5d141351a30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
