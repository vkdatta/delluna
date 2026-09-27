export const name="calendar-check-fill";
export const id="dl_245ba2370f06448fa124";
export const url=new URL("../icons/calendar-check-fill.svg?v=54e8434a3567b7cccf765b9db1d1b14ae52b7e9e11ac112c447a02b432e9bf6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
