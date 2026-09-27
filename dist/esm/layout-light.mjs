export const name="layout-light";
export const id="dl_968aea07aba942d99850";
export const url=new URL("../icons/layout-light.svg?v=3eedaf26f7ff7ec7753f9ecbea6926c616290b988dd56b6fa0c6f9904f74ae48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
