export const name="seat_vent_right-fill";
export const id="dl_b7b0a7cec4fb117ee0d1";
export const url=new URL("../icons/seat_vent_right-fill.svg?v=95a62b3f9c19d0a64be7168e8b0c941899eb8e22cfa84b4566aa86f27f0a3c40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
