export const name="baseball-helmet";
export const id="dl_53195ab96bf04c949223";
export const url=new URL("../icons/baseball-helmet.svg?v=ee5998bdded4ef03bf47d58252056cf67e68621f9a17f0b8e71c1a859a8112ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
