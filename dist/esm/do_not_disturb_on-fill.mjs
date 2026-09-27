export const name="do_not_disturb_on-fill";
export const id="dl_be56ee002e50a39c5bee";
export const url=new URL("../icons/do_not_disturb_on-fill.svg?v=17b465c8530a784703ad33dc4e48f7096b1c9ed862330a1513d4bf84a55727eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
