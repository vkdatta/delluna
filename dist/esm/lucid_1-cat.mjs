export const name="lucid_1-cat";
export const id="dl_257fba1e0a0d4411b5fa";
export const url=new URL("../icons/lucid_1-cat.svg?v=85c22c3ca83f8b09c316dd2a2853033d792ef01bcf279bc351baf33eacf6d7a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
