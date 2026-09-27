export const name="lucid_1-circle-gauge";
export const id="dl_98fcfff312d34d87b4ca";
export const url=new URL("../icons/lucid_1-circle-gauge.svg?v=1b7af69703f8e35b34ddbe7d9a0a06297b114261744ea90aab6afe8bea9f795b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
