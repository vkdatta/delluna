export const name="train-fill";
export const id="dl_f72c5a4b54ab3477fe00";
export const url=new URL("../icons/train-fill.svg?v=e842faa4cd76bffee68e2c61b054aa246c77fe144f41d80ed277639940b7f714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
