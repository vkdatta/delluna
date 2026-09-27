export const name="triangle-dashed-bold";
export const id="dl_ca1ef35cf1b7dfe58872";
export const url=new URL("../icons/triangle-dashed-bold.svg?v=9326976f4095f93a5e14adc4ce386f4c647c310c011301fefaa82fa41f600a39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
