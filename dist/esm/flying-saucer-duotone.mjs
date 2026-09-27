export const name="flying-saucer-duotone";
export const id="dl_f83af0289ebc48caa1b7";
export const url=new URL("../icons/flying-saucer-duotone.svg?v=b155de7047387f696fd84422976fc24c7bea30e08434f4ec5646a7d116d828f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
