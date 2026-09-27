export const name="host-fill";
export const id="dl_d9a53d2c02c01bcce613";
export const url=new URL("../icons/host-fill.svg?v=f1ddb2e92e0769622eb4453b384b82da83849efb36c98ff02b67e9e42829807f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
