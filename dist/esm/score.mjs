export const name="score";
export const id="dl_f3f2342a660b9a2692d7";
export const url=new URL("../icons/score.svg?v=22a7f5fdb5b7d8ddb5e31c46a177722ccf557a279f204ef3861e86284b50b22e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
