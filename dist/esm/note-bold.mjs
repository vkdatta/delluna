export const name="note-bold";
export const id="dl_3634c037ea90455d8c0a";
export const url=new URL("../icons/note-bold.svg?v=9903e1f131be899b2b614a0c7092c6b20aca35a3788976d16129cd543e82ee9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
