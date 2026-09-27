export const name="call-bell-bold";
export const id="dl_79e61324535d4f72a6da";
export const url=new URL("../icons/call-bell-bold.svg?v=ae9dccbf746818f1e87383082fd686e803084df1d45e269df8992bd1cb1df8eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
