export const name="headlights-thin";
export const id="dl_458222106c194befb7d5";
export const url=new URL("../icons/headlights-thin.svg?v=049304996ddf7b10070921978e208905170ae2936a0c2fb1c39aa3fb3c3584a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
