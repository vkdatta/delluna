export const name="content_paste-fill";
export const id="dl_d20e4018e08840f882ad";
export const url=new URL("../icons/content_paste-fill.svg?v=7228e987f17ccf171f15a63b414f9f1690408fc924ce4e450af9990ccf5bbb3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
