export const name="corners-in-bold";
export const id="dl_1922384c686641179220";
export const url=new URL("../icons/corners-in-bold.svg?v=dbb4b39f5c1fbdcbe32ea1b7a7e7369172fced62c0f4a49de3aecb3060852057",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
