export const name="calendar-slash-light";
export const id="dl_2b237cde43324d0d9aae";
export const url=new URL("../icons/calendar-slash-light.svg?v=80ff7ef71e43310eb4c32e1a75a19af7109b386339db8ec43c95aa6491ad5ae9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
