export const name="police-car-thin";
export const id="dl_601bdda79b7843d78a5f";
export const url=new URL("../icons/police-car-thin.svg?v=76329f9138e15f86b3bf0aa54f7e81c3572aba4a3acfe34e628fa2ae4c2dfb4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
