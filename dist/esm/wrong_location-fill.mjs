export const name="wrong_location-fill";
export const id="dl_68ddb5d4fd64b860df28";
export const url=new URL("../icons/wrong_location-fill.svg?v=0639e97583eec1c76a49557b454c04b79f87e8227f2f09b89bc95b86268a0231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
