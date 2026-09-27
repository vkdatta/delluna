export const name="rainbow-thin";
export const id="dl_3b017afd06054625b3a7";
export const url=new URL("../icons/rainbow-thin.svg?v=6122dbca5a3d12dcee225594807aeadcd2050cf34e2334dd341d42fdb4b53a54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
