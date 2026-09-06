export const name="pinterest-logo-light";
export const id="dl_19f650e4307a40d0a2ef";
export const url=new URL("../icons/pinterest-logo-light.svg?v=88301066e2f066e396dab653172057346daf6a61b7ece23e8cf88dbff5824c61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
