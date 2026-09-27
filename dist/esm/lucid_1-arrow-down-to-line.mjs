export const name="lucid_1-arrow-down-to-line";
export const id="dl_b67871f543934956a771";
export const url=new URL("../icons/lucid_1-arrow-down-to-line.svg?v=748e254c8c86c201fea87b7c8149c9ee24e75fd13e70a1eabcafb23055d8c10f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
