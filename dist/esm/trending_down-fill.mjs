export const name="trending_down-fill";
export const id="dl_92d7198d453ad95c76d6";
export const url=new URL("../icons/trending_down-fill.svg?v=439c0fa73f52ceef190f33c65428b103e107e4834d76cfbd2a793f39c395277f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
