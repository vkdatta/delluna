export const name="exam";
export const id="dl_c508a0ed4f464588bd15";
export const url=new URL("../icons/exam.svg?v=0bae22b876ec788c3fd7863b45e7984c255f235d6bea1522b53712d94f5e2f84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
