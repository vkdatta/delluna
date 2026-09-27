export const name="fast-forward-circle-duotone";
export const id="dl_df062a244e1d4749a429";
export const url=new URL("../icons/fast-forward-circle-duotone.svg?v=2a7300341f3fbfe06c35ee5f7cfbcaaf12509f2de6f0232e7039e40d0efd5b9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
