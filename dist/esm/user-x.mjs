export const name="user-x";
export const id="dl_be1fe404522d4c8faaa9";
export const url=new URL("../icons/user-x.svg?v=2cf939c20f22b71d6f7a94678502e533d4ece081db95cbfba8228bb232825908",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
