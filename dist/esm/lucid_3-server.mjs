export const name="lucid_3-server";
export const id="dl_4bf1c2910add4c23a4b7";
export const url=new URL("../icons/lucid_3-server.svg?v=bfe4b3ac5bcef2b49de0cdaba261184bf535331eedf2bb075b56f3fd97df949c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
