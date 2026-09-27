export const name="bandaids-bold";
export const id="dl_500de3a3379944958ef0";
export const url=new URL("../icons/bandaids-bold.svg?v=dade7f9fcd3ec57e986136b9dd2a618cabc86e10976612da2899588d69602305",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
