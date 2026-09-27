export const name="motorcycle-light";
export const id="dl_a0becece94b047229e35";
export const url=new URL("../icons/motorcycle-light.svg?v=c48eea0cdb2c84d5e75ed57a60b87f19a824d8334e955091af992009e0241371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
