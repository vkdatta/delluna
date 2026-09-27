export const name="coin-duotone";
export const id="dl_d8a801688f1f4e458062";
export const url=new URL("../icons/coin-duotone.svg?v=623d350ebd8fd50b28bee664ea31109b27f89b77f52f9f43f6157c36988ea640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
