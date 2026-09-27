export const name="network_wifi_2_bar_locked-fill";
export const id="dl_cea47521049a0cbea5dd";
export const url=new URL("../icons/network_wifi_2_bar_locked-fill.svg?v=97d498971c78dff7fb2af38ea2459bddfffa0dcc43291916fb8c8631e33118f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
