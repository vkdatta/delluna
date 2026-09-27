export const name="person_alert";
export const id="dl_1e12efae757ed79c1381";
export const url=new URL("../icons/person_alert.svg?v=f093e32e93f0bd44943b311da523317bc04b0190cecb9ec1966ecb9b46d3fa1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
