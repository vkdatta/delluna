export const name="shield_question-fill";
export const id="dl_565f7669ffe241bf8eef";
export const url=new URL("../icons/S/shield_question-fill.svg?v=a343953df3b7d241da1930c773be118d7cd302a6632be283acd5073034eb8113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
