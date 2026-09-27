export const name="checkbook";
export const id="dl_ff69827f46f7897e310c";
export const url=new URL("../icons/checkbook.svg?v=88a52d31d6999ab5fd072af6e7add80217758f64a5116fec33aab11ddeb83824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
