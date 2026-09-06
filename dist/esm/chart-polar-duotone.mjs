export const name="chart-polar-duotone";
export const id="dl_b7d43601093a47938627";
export const url=new URL("../icons/chart-polar-duotone.svg?v=70cb1c1cf30dc8391033496640fa787397f1a4edfd706913d788054e5dbb2a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
