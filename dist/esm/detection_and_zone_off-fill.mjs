export const name="detection_and_zone_off-fill";
export const id="dl_5190ff3c7b382031a87b";
export const url=new URL("../icons/detection_and_zone_off-fill.svg?v=81f1e1cdd75da396439690d07339cbef95cf6753aad28855d6ecf1564bf4931b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
