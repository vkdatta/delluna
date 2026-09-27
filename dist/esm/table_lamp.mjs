export const name="table_lamp";
export const id="dl_4f38c8a2282473cf7345";
export const url=new URL("../icons/table_lamp.svg?v=e3e3aedec2ce24f52a58613b63cf3125635432fb51b7102228fb175ed29cae54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
