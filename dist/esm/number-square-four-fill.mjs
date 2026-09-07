export const name="number-square-four-fill";
export const id="dl_e40931fc50cc406ea9b1";
export const url=new URL("../icons/number-square-four-fill.svg?v=9a3a65fa21d247a262477859156bdec8fbe1a218a84cfbb3c63d58205a2dda18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
