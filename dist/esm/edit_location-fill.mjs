export const name="edit_location-fill";
export const id="dl_0909d1ea1824fbdb6c3f";
export const url=new URL("../icons/edit_location-fill.svg?v=4f5ec26caa8da6cebc5028515d62ec01e1c799e7f8b60615a5acdd5bbb25235d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
