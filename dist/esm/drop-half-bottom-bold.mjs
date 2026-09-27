export const name="drop-half-bottom-bold";
export const id="dl_bdfc4e8975054004918d";
export const url=new URL("../icons/drop-half-bottom-bold.svg?v=60df2252e99dc3cf3893c271801be9e043e2b9f9e1d987e85e71bc403bbbdbed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
