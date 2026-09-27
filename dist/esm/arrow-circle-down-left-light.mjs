export const name="arrow-circle-down-left-light";
export const id="dl_ebaea866737c40de943c";
export const url=new URL("../icons/arrow-circle-down-left-light.svg?v=531f128fa31123d044435bce49322158ae62872381ab60665307252cc1b017f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
