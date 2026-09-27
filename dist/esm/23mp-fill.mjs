export const name="23mp-fill";
export const id="dl_5ef63432fe15c45b0ff0";
export const url=new URL("../icons/23mp-fill.svg?v=514d5152095ac344adc1206c24384976074370d87b805d2b20868629b7c1a696",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
