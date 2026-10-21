export const name="neural";
export const id="dl_18f79c61f550445daad4";
export const url=new URL("../icons/assets/neural.svg?v=0a863bd9d39960eb220400400332ee1b3ada0e6ce309b89b202bb0784e4e28aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
