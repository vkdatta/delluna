export const name="trending-up-down";
export const id="dl_e587c032a788459f8caf";
export const url=new URL("../icons/trending-up-down.svg?v=5ac42844d01d1d5dc2f4d91492ae74e4d630467d501a765ec3bc78a9812f55e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
