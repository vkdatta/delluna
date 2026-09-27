export const name="hard_drive_2-fill";
export const id="dl_b93851c7b55371072d49";
export const url=new URL("../icons/hard_drive_2-fill.svg?v=37127cf6a4c13c21585308913c0f80a8aa3eafc9c4d92d8801cf43aca1cb346c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
