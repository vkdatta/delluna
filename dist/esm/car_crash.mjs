export const name="car_crash";
export const id="dl_1b60a5b9c4e0aee37a85";
export const url=new URL("../icons/car_crash.svg?v=6c64634974ed4a757366cfa828c6f280b3cb61fe7705ced31386ae07d054d1ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
