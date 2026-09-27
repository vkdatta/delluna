export const name="sensors";
export const id="dl_d61381992df10a7bd545";
export const url=new URL("../icons/sensors.svg?v=1191752ae9a4aea247078c398930d5cb584ccdee692652aae1316f84a116440d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
