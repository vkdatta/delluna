export const name="lucid_1-calendar-off";
export const id="dl_81c9016b62f444b0904a";
export const url=new URL("../icons/lucid_1-calendar-off.svg?v=98bb2a1667e8e882023e6db9c50e9275a375a1f94ba050a9a37bc89ba53c3eef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
