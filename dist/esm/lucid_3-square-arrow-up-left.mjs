export const name="lucid_3-square-arrow-up-left";
export const id="dl_539a6b611cd942288e7b";
export const url=new URL("../icons/lucid_3-square-arrow-up-left.svg?v=998d0074cbfab891f5efd3da3385a2befc60a164266a529c12faf325dffb77c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
