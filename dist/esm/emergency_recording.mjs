export const name="emergency_recording";
export const id="dl_d816bef6f64315f374c7";
export const url=new URL("../icons/emergency_recording.svg?v=48a5ad6070c2c06f0ae9323492d7336ff7e089e14c01d1bf97d2f249eedabd99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
