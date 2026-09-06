export const name="ping-pong";
export const id="dl_92e3b40c129844008197";
export const url=new URL("../icons/ping-pong.svg?v=523de694596efc02c2875f212c1e30205d1190e7dd048f1203e0abf81bc3e976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
