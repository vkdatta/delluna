export const name="weather_mix-fill";
export const id="dl_b17ddbef5146a92df8dd";
export const url=new URL("../icons/weather_mix-fill.svg?v=3440aaeb16981fa0437a62c01ece43917809a258c95cc71c2e6998fcc0773106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
