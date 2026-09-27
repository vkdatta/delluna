export const name="data_exploration-fill";
export const id="dl_184c761135930d4db02b";
export const url=new URL("../icons/data_exploration-fill.svg?v=81f2a6155ac623e6947d2e72c520c9778f1afadf01d8f882c628c5190b7228ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
