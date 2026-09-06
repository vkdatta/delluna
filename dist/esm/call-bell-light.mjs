export const name="call-bell-light";
export const id="dl_2d95b98b8295480a83bd";
export const url=new URL("../icons/call-bell-light.svg?v=b842ac57f7febc809c25e2b91913bbea7dd2228777e8e7788a104793f0097b88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
