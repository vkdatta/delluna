export const name="stadium";
export const id="dl_7d20a3ac0fca402b9926";
export const url=new URL("../icons/stadium.svg?v=b84554851245e64b41e7a800b2914aee2851da56982079005977fce51cfe7c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
