export const name="sensors";
export const id="dl_0ed277e4fea9409ca99d";
export const url=new URL("../icons/S/sensors.svg?v=1191752ae9a4aea247078c398930d5cb584ccdee692652aae1316f84a116440d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
