export const name="lucid_2-flip-horizontal-2";
export const id="dl_cfec710a685f45a28002";
export const url=new URL("../icons/lucid_2-flip-horizontal-2.svg?v=69fc35d9eb136002f210832e224cc8d9ecbd96df57f73734d2e05051ae60f5da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
