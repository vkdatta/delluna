export const name="tornado-light";
export const id="dl_4a9f87142aa1ec0a4eb8";
export const url=new URL("../icons/tornado-light.svg?v=01c45c2357cb2af1184181efa80ec3eaccb8dccd1701835567d9c245606d3e2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
