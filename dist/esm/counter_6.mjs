export const name="counter_6";
export const id="dl_90e3777b7556759705c9";
export const url=new URL("../icons/counter_6.svg?v=ef9279779d00b2889c48942c80e18fc0f12a54b28929abb90a30cfb20415a401",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
