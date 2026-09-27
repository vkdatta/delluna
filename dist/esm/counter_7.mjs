export const name="counter_7";
export const id="dl_6bd80d516dc29e7da3be";
export const url=new URL("../icons/counter_7.svg?v=3aa212b0542587df15f3e0bd82630570c1eb92ade1cf2c3ade55d95abe5486e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
