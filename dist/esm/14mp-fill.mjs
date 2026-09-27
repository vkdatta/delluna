export const name="14mp-fill";
export const id="dl_1b883f6aacc8acd9650c";
export const url=new URL("../icons/14mp-fill.svg?v=9e3d6f07c1e050ae007d97435812f861d682c752bcccc7afe7547bc974656b97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
