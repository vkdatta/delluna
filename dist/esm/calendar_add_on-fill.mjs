export const name="calendar_add_on-fill";
export const id="dl_56632d26ec0cab1ca860";
export const url=new URL("../icons/calendar_add_on-fill.svg?v=ff8f539de590081101c9959d71bf4f93241820a6bd105dce0cc88067775967b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
