export const name="tree";
export const id="dl_7184c9967b6190d42b68";
export const url=new URL("../icons/tree.svg?v=4cf32872beae685a88788897af95096c5a1ff7af56018727bf3a98daa701842f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
