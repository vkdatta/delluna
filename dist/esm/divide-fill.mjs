export const name="divide-fill";
export const id="dl_486fc7831a7141a696c2";
export const url=new URL("../icons/divide-fill.svg?v=4c89349884a0bdde25b0ba072de597759025b1ab28497307e3627ee6aaaade46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
