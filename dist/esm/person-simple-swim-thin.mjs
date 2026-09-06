export const name="person-simple-swim-thin";
export const id="dl_3d85ee91203445a083fa";
export const url=new URL("../icons/person-simple-swim-thin.svg?v=6d93da6067dc7a61fcbc2b641d57981c39f379f882b074e48b4d0f0f1efa4f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
