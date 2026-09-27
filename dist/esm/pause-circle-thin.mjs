export const name="pause-circle-thin";
export const id="dl_d07df6fd29b045768fe4";
export const url=new URL("../icons/pause-circle-thin.svg?v=79a6daa758d23e1f0e22c14b90c5b4493451f1846544fc866fd16dae670f7d01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
