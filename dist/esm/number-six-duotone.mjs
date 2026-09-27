export const name="number-six-duotone";
export const id="dl_3e01aee0e6e04775bf82";
export const url=new URL("../icons/number-six-duotone.svg?v=cf35c5647d62579dc7df3eb57a9a52008cc74bd95799a703ac51bed60716a3c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
