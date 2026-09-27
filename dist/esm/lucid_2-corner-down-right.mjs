export const name="lucid_2-corner-down-right";
export const id="dl_4ce79ef01d8f4b5b87a3";
export const url=new URL("../icons/lucid_2-corner-down-right.svg?v=7d819df87cbc1ee1f5df6cdcca9e851b0311240a19e77002a64375189b387145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
