export const name="number-five-thin";
export const id="dl_d45ffad162524f008360";
export const url=new URL("../icons/number-five-thin.svg?v=b598c4d95741ee78ee61a7f9f47400e11f88fdfbee418c14855657d0193bb1d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
