export const name="backpack-light";
export const id="dl_3c298aeb3e604b1c833f";
export const url=new URL("../icons/backpack-light.svg?v=4dc062a903e87af34d250743e1a2db6cf293bb93eced88a3aa906a29e8fdf44e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
