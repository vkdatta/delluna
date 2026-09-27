export const name="calendar-plus-light";
export const id="dl_3d5a4e7f02fc4c03acdd";
export const url=new URL("../icons/calendar-plus-light.svg?v=db89bb26a623e4b854307bdd5050a188fbb78eecb3ef5d89de8e975be90d1432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
