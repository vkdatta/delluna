export const name="exposure_neg_1-fill";
export const id="dl_f4353d83112d9fd2001c";
export const url=new URL("../icons/exposure_neg_1-fill.svg?v=875976af7e473468f0278613257f11308fbe8aa789d6ecb79816a02b17eb294a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
