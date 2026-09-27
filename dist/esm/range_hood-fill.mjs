export const name="range_hood-fill";
export const id="dl_86c32261828dcf487583";
export const url=new URL("../icons/range_hood-fill.svg?v=71a7bf3b2b3b5902991ad6ac58a24501148dcc563b75e0425ea7702d72e3c43c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
