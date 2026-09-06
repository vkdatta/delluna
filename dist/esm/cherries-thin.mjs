export const name="cherries-thin";
export const id="dl_ffd883e886244746825f";
export const url=new URL("../icons/cherries-thin.svg?v=8076fa8589c07e8a4de16e195b21e09eab869bece8999ebefea4ee45b0d821da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
