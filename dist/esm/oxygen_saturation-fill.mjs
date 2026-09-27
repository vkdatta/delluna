export const name="oxygen_saturation-fill";
export const id="dl_1708260858a21ff0dfe2";
export const url=new URL("../icons/oxygen_saturation-fill.svg?v=d8319070f232f02e21a75b59ce20a309973f71d9573683c01fce1de4cb4a63f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
