export const name="gitlab-logo-thin";
export const id="dl_132ee5a615414beb8113";
export const url=new URL("../icons/gitlab-logo-thin.svg?v=445d45bb1a929520be11d060f0e2c10ef228e7046ac998725f0c7d4edb3ba936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
