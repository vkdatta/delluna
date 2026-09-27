export const name="arrow_warm_up-fill";
export const id="dl_471cd7478a17f423cace";
export const url=new URL("../icons/arrow_warm_up-fill.svg?v=a68249dc4fcbcde3699b1b93da02ecb2596c465b3b9d20ef93bf49c32ba3fcdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
