export const name="bell-thin";
export const id="dl_597f42b5d1ad4aadb2ca";
export const url=new URL("../icons/bell-thin.svg?v=fec6c535bacba32228b0326c249d61dcfbd43025a1cec7393ff1c35e028b393b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
