export const name="battery-warning-vertical-thin";
export const id="dl_5c85270affd4464fb21a";
export const url=new URL("../icons/battery-warning-vertical-thin.svg?v=04d2adfc5f3ac62c395719198826e58f49168b45a4f1294e2de79f2270082191",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
