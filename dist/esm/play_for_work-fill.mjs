export const name="play_for_work-fill";
export const id="dl_c781796ce2fef18b3e85";
export const url=new URL("../icons/play_for_work-fill.svg?v=2f99e1283bbb32ec3b020c03d12eeb957a09cfdd362a89c000437e2e89259e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
