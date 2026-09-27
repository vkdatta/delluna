export const name="number-circle-seven-bold";
export const id="dl_5f0f36ae3be240499763";
export const url=new URL("../icons/number-circle-seven-bold.svg?v=1ef18c96177d3f5dc87010f16dc8fb1750a158206c1b26f227971789e997b089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
