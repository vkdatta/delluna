export const name="snooze";
export const id="dl_54c1c58b139184320bc7";
export const url=new URL("../icons/snooze.svg?v=1296b6c9ff2ae4c65af35efd84e339d526ec14b59f5f9e298f0a4ec804560afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
