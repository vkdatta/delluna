export const name="traffic-cone-fill";
export const id="dl_9fc7fd30902ba9248118";
export const url=new URL("../icons/traffic-cone-fill.svg?v=12a6525e4eee8d463f9ff0832131e8212f310c9018a13fb45a3224d712efa688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
