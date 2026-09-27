export const name="arrow-square-in-bold";
export const id="dl_225db11f865a4676a0ca";
export const url=new URL("../icons/arrow-square-in-bold.svg?v=003f89acafd46b08ba58a3a77d2a120de4d9a2ba6d3603e4071ee5cf09395c03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
