export const name="battery_unknown-fill";
export const id="dl_b7cb454418fe472ba27b";
export const url=new URL("../icons/B/battery_unknown-fill.svg?v=2501a9ebb86761056eb20040127b0efcb5ae1981c3e94bbe9f6bac15389f7ddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
