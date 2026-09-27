export const name="call-bell-bold";
export const id="dl_79e61324535d4f72a6da";
export const url=new URL("../icons/call-bell-bold.svg?v=728f9f9ff7246db0d69920b80eeec8d5296ee4281264960f238e42a0209aa06e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
