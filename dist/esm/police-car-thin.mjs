export const name="police-car-thin";
export const id="dl_601bdda79b7843d78a5f";
export const url=new URL("../icons/police-car-thin.svg?v=820e0595e1c286f8cda6e8e0e804b2587cc58be20db995d263c61496795a4728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
