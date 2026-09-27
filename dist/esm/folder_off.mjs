export const name="folder_off";
export const id="dl_11e7d9fd34a1285e4640";
export const url=new URL("../icons/folder_off.svg?v=1c037ff4daecdc9696d3a429840b394afb757b2753e4f9b8b9950510c54c5cb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
