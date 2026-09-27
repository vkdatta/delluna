export const name="lucid_3-quote";
export const id="dl_6847b565bbfe4df89937";
export const url=new URL("../icons/lucid_3-quote.svg?v=1f895d579d320d2b5c1d72cbfc31b0937603df219b5bdcb9086c63468137c505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
