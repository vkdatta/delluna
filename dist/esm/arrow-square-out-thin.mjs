export const name="arrow-square-out-thin";
export const id="dl_03ea858e8669403db58f";
export const url=new URL("../icons/arrow-square-out-thin.svg?v=0e5ed5fa860cdad07d5f0fb3c5f935d3035baa43713dae1e7f19a99977ae2f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
