export const name="multiline_chart";
export const id="dl_4bd723ebd13948eebd74";
export const url=new URL("../icons/multiline_chart.svg?v=2ba64197b2586442ea2a961b489218c6d1980c6cf4efd7f806d88f2b1274db1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
