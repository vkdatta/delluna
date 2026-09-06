export const name="envelope-open-bold";
export const id="dl_5863e68bb0874143a215";
export const url=new URL("../icons/envelope-open-bold.svg?v=e00cc8ccf4992a861a0b408ab782635f9029d03786ee6e3b9fc3c9f926df0508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
