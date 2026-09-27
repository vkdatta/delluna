export const name="hard_drive_2";
export const id="dl_be3872a6b1861df52378";
export const url=new URL("../icons/hard_drive_2.svg?v=83617e9fa33845326919a8ca478a244a82609e73446803cb533ff8753d3c7d20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
