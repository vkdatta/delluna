export const name="roller_shades_closed";
export const id="dl_322457ee9f1845900413";
export const url=new URL("../icons/roller_shades_closed.svg?v=3c225a73e19aff940da2c43c80b919c8db5be5166f9671f7718d7af9d3127d9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
