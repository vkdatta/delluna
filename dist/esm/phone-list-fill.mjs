export const name="phone-list-fill";
export const id="dl_30e42ad096634967b1f5";
export const url=new URL("../icons/phone-list-fill.svg?v=05d4f24d5258a5851e429d790c3376cfbb181496085d5f91b3f71e98dcb64ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
