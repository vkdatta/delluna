export const name="lucid_2-house-plus";
export const id="dl_a0fcc4fb9aa24e8c89eb";
export const url=new URL("../icons/lucid_2-house-plus.svg?v=f30845eae56e2bff8508883364d944f2ba2667d681b1e58fd9d680802b615e67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
