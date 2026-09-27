export const name="climate_mini_split";
export const id="dl_f24dd9a0432040b0d9b9";
export const url=new URL("../icons/climate_mini_split.svg?v=997ceb7e6eb3441390573b3422d0b05c19182b0a0e3d4d2e5922b4312c724d42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
