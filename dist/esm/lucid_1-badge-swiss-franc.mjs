export const name="lucid_1-badge-swiss-franc";
export const id="dl_f089285fc87e422cb150";
export const url=new URL("../icons/lucid_1-badge-swiss-franc.svg?v=9489e0c15e2adf73c5f4be9e7cb8787e040d583f5944ff21df92d8b40ba74e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
