export const name="location_away";
export const id="dl_40130e4be71521fcf115";
export const url=new URL("../icons/location_away.svg?v=d92648008cbe0a6c911b3380320db6f7e1f6949c3f7da223efc314d8b18d5415",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
