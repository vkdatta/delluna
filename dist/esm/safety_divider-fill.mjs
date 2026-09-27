export const name="safety_divider-fill";
export const id="dl_d6c3ce06d978908c7231";
export const url=new URL("../icons/safety_divider-fill.svg?v=b7c685e4cd51d0c5081d1d6e88e9e5d0835a19c88b96600ef3580cbdb4e6c9f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
