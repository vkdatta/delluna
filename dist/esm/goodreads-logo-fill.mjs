export const name="goodreads-logo-fill";
export const id="dl_6346b5ce32f4488ab7c2";
export const url=new URL("../icons/goodreads-logo-fill.svg?v=0dd852b9e69d6b3896b1c5f28e2f270ce20b2ca3bb688349093d8d783bbb6b8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
