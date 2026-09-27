export const name="number-five-fill";
export const id="dl_827bb16edcb84d96ae55";
export const url=new URL("../icons/number-five-fill.svg?v=5cba6d76ef2d34545a08ee707f95cccf633cd0b3c46431d60a331346f76d8e76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
