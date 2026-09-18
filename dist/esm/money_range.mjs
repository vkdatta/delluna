export const name="money_range";
export const id="dl_9f44e8764fe14126b777";
export const url=new URL("../icons/money_range.svg?v=8f3184e9eec11b30daee36bc999f159cefbc65ae99b18ac43bd19a2010b420d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
