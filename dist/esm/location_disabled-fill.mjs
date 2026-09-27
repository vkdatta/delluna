export const name="location_disabled-fill";
export const id="dl_26d069610583ef4426da";
export const url=new URL("../icons/location_disabled-fill.svg?v=aa3b3641fb6e319fcf237cadf0a5845739e7b7978484f2312ee1ce066a08f700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
