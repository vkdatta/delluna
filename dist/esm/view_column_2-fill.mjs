export const name="view_column_2-fill";
export const id="dl_f137501278bd3c7b8c58";
export const url=new URL("../icons/view_column_2-fill.svg?v=83f26f452c4e359bbce87fb5399f0712ca56bb5e883a8f3f02029216931b091b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
