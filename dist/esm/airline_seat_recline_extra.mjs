export const name="airline_seat_recline_extra";
export const id="dl_4a8f3879d8fa6df5f362";
export const url=new URL("../icons/airline_seat_recline_extra.svg?v=ce4a50a59fd22b8a8055b7c8fd6238ae22ef329f39ae965684637c6107fa9c68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
