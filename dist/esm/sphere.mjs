export const name="sphere";
export const id="dl_6229e2d557e4cd0c71a0";
export const url=new URL("../icons/sphere.svg?v=7781b6a757f010ab5e6fec546e4adc1bd18b0521c865b1a3188626940bad429a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
