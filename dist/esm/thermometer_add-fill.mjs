export const name="thermometer_add-fill";
export const id="dl_ed0c9cce1c0a9fabd123";
export const url=new URL("../icons/thermometer_add-fill.svg?v=7407d25bd060dcbcc9b3a7e0b4d1403f9900281db34a95778f9c891ef6733a29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
