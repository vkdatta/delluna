export const name="readiness_score-fill";
export const id="dl_bbd6c46f1769d75aed9b";
export const url=new URL("../icons/readiness_score-fill.svg?v=5cc62357cbabf113c0f86b72d18a25db982f72e2866e772ceb4f57bbcc39e5fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
