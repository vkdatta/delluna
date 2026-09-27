export const name="contacts-fill";
export const id="dl_3de3a4de6485c1a54072";
export const url=new URL("../icons/contacts-fill.svg?v=637a2de2d88ff702305360f98495a82f37a4d878054387dd83607c6172128759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
