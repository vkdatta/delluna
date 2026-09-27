export const name="assignment_turned_in-fill";
export const id="dl_ea68a86f2000d41c915d";
export const url=new URL("../icons/assignment_turned_in-fill.svg?v=55a8045aa9cdd46f5986ab9af3ed706fa9d1d72e199a0ba54afac5aa77e0dbfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
