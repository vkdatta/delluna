export const name="arrow-line-up-left-thin";
export const id="dl_dd88eccb3d2e4819bf69";
export const url=new URL("../icons/arrow-line-up-left-thin.svg?v=a97eefd06978a48e64e2f638d67bbd25fde363e93f1849a008ceb792395f725a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
