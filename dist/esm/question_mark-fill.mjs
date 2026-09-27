export const name="question_mark-fill";
export const id="dl_b937cba05272e51ac3ee";
export const url=new URL("../icons/question_mark-fill.svg?v=3f736ba038e73fd62af2a45950251fe317a464772e1202a88bd38c8482a1ed2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
