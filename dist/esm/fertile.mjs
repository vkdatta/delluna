export const name="fertile";
export const id="dl_6d44fcac76e2eaaa2999";
export const url=new URL("../icons/fertile.svg?v=b41bb5e6f6f5cccc010794ed1a2e2329e42f6c32302389857054cc93d4f25fe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
