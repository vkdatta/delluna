export const name="sports_baseball-fill";
export const id="dl_86f95de524e84983fa9e";
export const url=new URL("../icons/sports_baseball-fill.svg?v=0d2014efe831ab8a2e5b1663aae4d36cddeddeb88afe71c021915b4ec4e8f0dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
