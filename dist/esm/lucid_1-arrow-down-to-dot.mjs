export const name="lucid_1-arrow-down-to-dot";
export const id="dl_a33f30a36a6943a186d1";
export const url=new URL("../icons/lucid_1-arrow-down-to-dot.svg?v=a05907b8c19734e254f8c03cfbff0f4b02f961939e9f74450e3767e949f78711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
