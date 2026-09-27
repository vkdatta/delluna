export const name="metabolism-fill";
export const id="dl_25d130982362401a2bdf";
export const url=new URL("../icons/metabolism-fill.svg?v=ddeed492f76862ab97462e6df34230e0e8afee09c9e01ce5abf20aae94bc23d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
