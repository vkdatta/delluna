export const name="arrow-bend-left-up";
export const id="dl_1b0ba6788dba4887910f";
export const url=new URL("../icons/arrow-bend-left-up.svg?v=90271a64f10eaf1ffbcee2a238dbc6874faff5886442d6526224d3c71c8d46b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
