export const name="balloon-thin";
export const id="dl_cd4b4667c5d14787bb51";
export const url=new URL("../icons/balloon-thin.svg?v=b7995dd4142302f0984f1c7e173374a149e1652f18c847cdb604e48e01d3f295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
