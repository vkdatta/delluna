export const name="arrows-horizontal";
export const id="dl_da0b4df6f518446db7c6";
export const url=new URL("../icons/arrows-horizontal.svg?v=f160c2df212d07bd0cc4fcaa0970f4b35f27d4fa27b69e654846ef95543b0f14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
