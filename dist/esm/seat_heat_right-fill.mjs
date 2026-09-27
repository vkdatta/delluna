export const name="seat_heat_right-fill";
export const id="dl_37d8e5d8afe041406577";
export const url=new URL("../icons/seat_heat_right-fill.svg?v=812c4c7bfee84cb2ee14af6836150801665c742fb7c76cae6ef7557e094f3832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
