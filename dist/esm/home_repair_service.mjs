export const name="home_repair_service";
export const id="dl_37574a5a5e4095b53009";
export const url=new URL("../icons/home_repair_service.svg?v=16a127f43b6693a04a5e177fb59b69c84584b195564c4dea8ffe1377f1c8fd62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
