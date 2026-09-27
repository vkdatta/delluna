export const name="calendar-star-light";
export const id="dl_77f72ef13d80498d81cb";
export const url=new URL("../icons/calendar-star-light.svg?v=b6fd771d07c01b8dbbe88e9f5a66f9c16fab33f8a6a68d1653f53790c542280a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
