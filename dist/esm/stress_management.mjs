export const name="stress_management";
export const id="dl_620a7adb53b869f492a6";
export const url=new URL("../icons/stress_management.svg?v=f0ac2cd7f0552748825679bf4c4dd9578f2b8d755f5e33929d9bba2aa64e8d5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
