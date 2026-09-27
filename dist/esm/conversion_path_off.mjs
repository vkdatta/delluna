export const name="conversion_path_off";
export const id="dl_e0cbaf6f0fdccbf82c27";
export const url=new URL("../icons/conversion_path_off.svg?v=15c02238df1038262391ec9a4825ebf4236f463c99669f0aa46be075e875b9f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
