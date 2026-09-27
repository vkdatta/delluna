export const name="menstrual_health-fill";
export const id="dl_873f756163f423e0a3d1";
export const url=new URL("../icons/menstrual_health-fill.svg?v=e00fe3c0ed938cfe88d526383a96798de246a0c13de0f4cff657c0dbfa494882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
