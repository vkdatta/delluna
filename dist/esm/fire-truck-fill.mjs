export const name="fire-truck-fill";
export const id="dl_8295a8fe3e3646d89920";
export const url=new URL("../icons/fire-truck-fill.svg?v=6b7567ae45cccdf7175717b012387f380ae4b1496cc87dbf2ec6c046b4e9dca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
