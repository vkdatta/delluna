export const name="lucid_3-notebook-tabs";
export const id="dl_a41e8e8ea625434c9973";
export const url=new URL("../icons/lucid_3-notebook-tabs.svg?v=a7e5289c7084efd7d4a180c6439067e5cc64a836d290edccb2c2a49eb10770a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
