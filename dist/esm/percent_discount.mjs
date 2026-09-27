export const name="percent_discount";
export const id="dl_e8d3b54f8f344b18552d";
export const url=new URL("../icons/percent_discount.svg?v=b2dddcd6ba40199a5bece788ac8dd042afdd632ef7ed9595e6a82b61645b7172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
