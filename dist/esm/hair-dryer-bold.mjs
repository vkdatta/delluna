export const name="hair-dryer-bold";
export const id="dl_5279904a13ca4034b508";
export const url=new URL("../icons/hair-dryer-bold.svg?v=fc83d5f6768aea3b68d9607e5778e3ae184f55805b7384d117f8e7070c553089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
