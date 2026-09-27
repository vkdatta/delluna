export const name="filter_3-fill";
export const id="dl_cc70ae9c48852a10ec34";
export const url=new URL("../icons/filter_3-fill.svg?v=8999a00105e6f5b093a42f075d93b1d7aa579b9734d3607f11a49fe9e5390d18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
