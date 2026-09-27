export const name="ink_eraser_off";
export const id="dl_98ce2114dc257cfa26f7";
export const url=new URL("../icons/ink_eraser_off.svg?v=a4077a2a13ab0092a31fc6a93f0fab3859934709cc74a424cf33e1185dc30bae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
