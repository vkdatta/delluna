export const name="wave-sine-bold";
export const id="dl_45c1911b7cbb2ac06fdc";
export const url=new URL("../icons/wave-sine-bold.svg?v=f5a2f97f60906de014a4bdcf0969ce20efaf96e6cd41227c1d43ef7f8a07f8ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
