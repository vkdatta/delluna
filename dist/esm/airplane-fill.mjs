export const name="airplane-fill";
export const id="dl_a382b6676c074bceb84d";
export const url=new URL("../icons/airplane-fill.svg?v=7333303f2a0240f3d4156f84a887b499f9d5dde90ee3a3b5df45064f8a781a36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
