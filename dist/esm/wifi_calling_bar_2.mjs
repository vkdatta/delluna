export const name="wifi_calling_bar_2";
export const id="dl_f505d90aa5bfde03952e";
export const url=new URL("../icons/wifi_calling_bar_2.svg?v=cd31d0da624713c9bd12b9eb85ab313432061255915700043c63a6ef3aa8dcad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
