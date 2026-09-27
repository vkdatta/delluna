export const name="person-simple-swim-thin";
export const id="dl_3d85ee91203445a083fa";
export const url=new URL("../icons/person-simple-swim-thin.svg?v=c2c94f89b58ef437f696093e116f69aa751afcd142731982c6b91074851cf5e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
