export const name="unknown_2-fill";
export const id="dl_3e90417b95804cf6ab80";
export const url=new URL("../icons/U/unknown_2-fill.svg?v=4440c69ff1bb24fce6dad7f9e398ad4fb26228c25da561f12cb538bfdf4bb490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
