export const name="arrow-circle-up-duotone";
export const id="dl_f79be3b5a8be4b27b8d0";
export const url=new URL("../icons/arrow-circle-up-duotone.svg?v=bf452045e8e13ea3419763f59374b0dbc571e5741d0f3248f745308c6571d2ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
