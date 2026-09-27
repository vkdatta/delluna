export const name="align-bottom";
export const id="dl_6b52be5b13244d0489cd";
export const url=new URL("../icons/align-bottom.svg?v=d06730d30b8234111bb00ec8a1a4c523066759a2b24af961878dfd49fd2b4d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
