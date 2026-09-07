export const name="seal-check-bold";
export const id="dl_3b56119464164d898b63";
export const url=new URL("../icons/S/seal-check-bold.svg?v=61559b0e0467180e127c4e3592960559644d380b743b6d0e3c38d81ce1008026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
