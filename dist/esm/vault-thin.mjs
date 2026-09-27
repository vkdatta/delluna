export const name="vault-thin";
export const id="dl_5cb471d8992bb75fe780";
export const url=new URL("../icons/vault-thin.svg?v=92d55ed33b5732d4a26a673df114301525a5c5476beea1e63b3ad41798521ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
