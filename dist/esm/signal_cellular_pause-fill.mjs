export const name="signal_cellular_pause-fill";
export const id="dl_1bd143cfdea940c28126";
export const url=new URL("../icons/S/signal_cellular_pause-fill.svg?v=c398af760848380dfd95ced8b296f397730ab41e80ab76c4cefa174b6022e913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
