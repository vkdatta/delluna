export const name="battery-warning-bold";
export const id="dl_177bbb356b3f4677be98";
export const url=new URL("../icons/battery-warning-bold.svg?v=3a0cea6f8a05070c2fd973fa332d0f42fbcad4fa88d9ac33368016225898fcec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
