export const name="high_quality";
export const id="dl_7f8c328c3a7755ff126b";
export const url=new URL("../icons/high_quality.svg?v=304a910dadfccac1cf97a9603cd7ba01c7e545d57dca3f1eed6c498d306a7ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
