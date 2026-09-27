export const name="lucid_1-arrow-big-up-dash";
export const id="dl_ce4ad41bb0c74ee08801";
export const url=new URL("../icons/lucid_1-arrow-big-up-dash.svg?v=8f84a6e6b5391fa56390c56377a931867f650f6062d35c2c638f44b3eb6e2972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
