export const name="filter_9";
export const id="dl_c7d6838886b2a8718431";
export const url=new URL("../icons/filter_9.svg?v=2c4b740ca21ff2de2ab60e59ce1a8aaaf652abd4930f1bc595e62eae1132b138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
