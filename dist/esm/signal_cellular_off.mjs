export const name="signal_cellular_off";
export const id="dl_d0944f0599a5d211458d";
export const url=new URL("../icons/signal_cellular_off.svg?v=ad271c28a29d3e2812c9ac7509fb31d4b45a0dcdf9e49f5aeb4ff77e58b53389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
