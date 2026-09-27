export const name="hourglass-medium-light";
export const id="dl_f06d4925789b4922a947";
export const url=new URL("../icons/hourglass-medium-light.svg?v=ddac00c2771b6646eb32f91cd4e98af115d7829ed7ca82c85182f52bdfd892ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
