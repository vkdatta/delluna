export const name="lucid_3-orbit";
export const id="dl_f72e650b9c5f42169858";
export const url=new URL("../icons/lucid_3-orbit.svg?v=12e125ce9ff7e3bd981a21edbf7c9a1ff7f11231dca1d1c865ffcac7c08e8cc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
