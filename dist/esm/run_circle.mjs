export const name="run_circle";
export const id="dl_38406e40b5978c935c2f";
export const url=new URL("../icons/run_circle.svg?v=4dac942d630e48ea3b7d77a44009dd2f2cb1bc4b760b1d13d08c27fd8c3ee457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
