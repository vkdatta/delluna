export const name="shield-plus-fill";
export const id="dl_d1351b01deb0f7063d65";
export const url=new URL("../icons/shield-plus-fill.svg?v=ddc8c68314d4b770f4f299ccb31e6e2fd1517d68c10797c0859c299509c4bc41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
