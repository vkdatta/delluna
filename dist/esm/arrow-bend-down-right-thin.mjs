export const name="arrow-bend-down-right-thin";
export const id="dl_fcc8a8fae6a74b36bc47";
export const url=new URL("../icons/arrow-bend-down-right-thin.svg?v=af4d6fc71aede6cc4079bf0b21217f043aec6be077dd27c3f1eceb2fd552b697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
