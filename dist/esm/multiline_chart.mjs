export const name="multiline_chart";
export const id="dl_cf8f160abbe6c75e2a02";
export const url=new URL("../icons/multiline_chart.svg?v=f8c9c2506be65e680dc2563d7f13ee7fee807b837fd20455546fa9ea8a3058d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
