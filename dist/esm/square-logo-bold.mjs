export const name="square-logo-bold";
export const id="dl_052401bcbb88484bb127";
export const url=new URL("../icons/S/square-logo-bold.svg?v=242b57645ad06ecb1b39906f3520121f803900771bb06cc3b99f6b9fbe8b758d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
