export const name="lucid_3-quote";
export const id="dl_6847b565bbfe4df89937";
export const url=new URL("../icons/lucid_3-quote.svg?v=145fb9a51dae0512fbde2e6dd4f9f5c8a18fd24d6c505aabe3658a2cd703173f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
