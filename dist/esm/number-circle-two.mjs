export const name="number-circle-two";
export const id="dl_2c6c6fcdb1bd4bc7b0c3";
export const url=new URL("../icons/number-circle-two.svg?v=7377b11b460fa24f93d4fefe3290fc755cfc074297291588f1a1015993f1a7cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
