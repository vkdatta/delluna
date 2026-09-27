export const name="attach_file_off";
export const id="dl_b7158d82e8ef029f3df2";
export const url=new URL("../icons/attach_file_off.svg?v=29b5ed62b8a810ba3342bebe89394584177f8d56538acc013b712aaf3c848280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
