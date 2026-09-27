export const name="control-bold";
export const id="dl_5af74bd3c6394a30b3c5";
export const url=new URL("../icons/control-bold.svg?v=296bbaaba825f96dda889529a95541fe152b9103f04b3f899faf41d9e0592938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
