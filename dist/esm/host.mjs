export const name="host";
export const id="dl_48ef179fea5f4aae9089";
export const url=new URL("../icons/host.svg?v=cafea1fd9f34adb91826f4d1e313361279a55c47f40de505176302622ab43125",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
