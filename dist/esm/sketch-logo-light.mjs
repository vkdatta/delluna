export const name="sketch-logo-light";
export const id="dl_580f55f7809a0608f2d4";
export const url=new URL("../icons/sketch-logo-light.svg?v=d9ac464b9c7e9f479415dba4b2d98442a2322907f67e0c45c8c8548becb9c055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
