export const name="sports_tennis-fill";
export const id="dl_05d50c5cd114a2110c6d";
export const url=new URL("../icons/sports_tennis-fill.svg?v=b029da2089c8681fa48ccb2f765df56f8dd7e9f25c9e7001c13402eb33cdf63f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
