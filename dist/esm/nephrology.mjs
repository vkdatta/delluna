export const name="nephrology";
export const id="dl_d5fc2f1787cfe8c03828";
export const url=new URL("../icons/nephrology.svg?v=acf0e0133fc5e166f63d5e069b79d440f30c27091788750c24a5fcb97510cb9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
