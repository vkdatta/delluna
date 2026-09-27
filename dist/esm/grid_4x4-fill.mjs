export const name="grid_4x4-fill";
export const id="dl_fbf6a4e3305a6eeaebf6";
export const url=new URL("../icons/grid_4x4-fill.svg?v=06673b58107b713697cdade6137f4ce7d21e1eaa6319d8cf164080e02e5ffc79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
