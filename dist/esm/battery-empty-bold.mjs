export const name="battery-empty-bold";
export const id="dl_8804b188b5e246a7aa3e";
export const url=new URL("../icons/battery-empty-bold.svg?v=d070538bcf09da1233cbd01c531b90d31329376f9383749a27d5a5eecc592e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
