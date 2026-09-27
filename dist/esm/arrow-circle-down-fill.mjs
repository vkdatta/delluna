export const name="arrow-circle-down-fill";
export const id="dl_cd2d68c710824cfd922c";
export const url=new URL("../icons/arrow-circle-down-fill.svg?v=79e76554825781e8459f3e0475cdf2033c7145054d40665eccda0875942bf2fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
