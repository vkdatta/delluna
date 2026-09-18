export const name="signal_cellular_pause";
export const id="dl_9e335de872aa4f70a83b";
export const url=new URL("../icons/S/signal_cellular_pause.svg?v=5d10644e1a211be27ac0c1e39f992680e7e855b079ff05cddca30ebe7821e204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
