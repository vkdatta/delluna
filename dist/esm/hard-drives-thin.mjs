export const name="hard-drives-thin";
export const id="dl_0265054e0a224f05951f";
export const url=new URL("../icons/hard-drives-thin.svg?v=2dea27e1ce85f0773513f3eaaff4b973b842c3417f66cff540cced817b595069",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
