export const name="table_sign-fill";
export const id="dl_5f7c0343154a6f5a45e2";
export const url=new URL("../icons/table_sign-fill.svg?v=24f0f8b9e3a0500c5532b4f93cb1799492d7afbd1feff71c9bffef90135d294c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
