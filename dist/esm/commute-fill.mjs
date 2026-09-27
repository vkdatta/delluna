export const name="commute-fill";
export const id="dl_45b7a9ff11ec0fc3c07a";
export const url=new URL("../icons/commute-fill.svg?v=cd2e0d8769508401d7a1aa63995c437bcf4d5cc1d62fc6abd11ec196a89aaeb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
