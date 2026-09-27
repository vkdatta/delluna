export const name="warning-octagon-bold";
export const id="dl_268305ac703c27516374";
export const url=new URL("../icons/warning-octagon-bold.svg?v=de9a1f686f49d73c6987e1fedc2a052735cdc91cf9be8e7a46461b1ada816a83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
