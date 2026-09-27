export const name="share-fill";
export const id="dl_0e1586c33aab04029040";
export const url=new URL("../icons/share-fill.svg?v=024b8545d1fabb206aefe915bddb9d504785953dba22f8c3e52861fdbf973707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
