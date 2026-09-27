export const name="arrows-out-light";
export const id="dl_1d2696decbff43cdacae";
export const url=new URL("../icons/arrows-out-light.svg?v=80afd297946fbedac87876a79082405ac2d48d568b45d14e8dd3106a17522762",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
