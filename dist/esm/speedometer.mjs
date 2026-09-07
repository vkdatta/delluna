export const name="speedometer";
export const id="dl_2d89e11cc1c84c8c93d4";
export const url=new URL("../icons/S/speedometer.svg?v=46038ab9fb081574f685384c824f8d352ea0bba84009b418283ca5abc8ccee98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
