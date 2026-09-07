export const name="selection-background-bold";
export const id="dl_d860f8781c9843598c35";
export const url=new URL("../icons/S/selection-background-bold.svg?v=70d2ba6f1364dc4b45f0cdff3b01a823301a0bbc1ef5caef3c513f90422130ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
