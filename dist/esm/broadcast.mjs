export const name="broadcast";
export const id="dl_ec55c72aba3f4558b1ab";
export const url=new URL("../icons/broadcast.svg?v=defab0636a95d411cde1078d470d0116ebad287dfaceaff1c9b9b5c4a3f17e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
