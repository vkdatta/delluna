export const name="recent_actors";
export const id="dl_f7a9d86b40d2cf10695e";
export const url=new URL("../icons/recent_actors.svg?v=c976c64bda549331426cde2659288961e95e2634711d859945ad88ec58d34ae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
