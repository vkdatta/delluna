export const name="thermometer-duotone";
export const id="dl_4ca90bb7f8e048a4be11";
export const url=new URL("../icons/T/thermometer-duotone.svg?v=1db437293c044a87200332f24637385c4705040a9744f7dc6412975a0405ce1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
