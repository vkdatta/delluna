export const name="sort-descending-bold";
export const id="dl_f8217ea42044eff87e93";
export const url=new URL("../icons/sort-descending-bold.svg?v=e039963f83ca989fd22b5b967fb5c0895b83be16b3ed9bb4be133b5ae0c7f6bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
