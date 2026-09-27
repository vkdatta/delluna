export const name="standard-definition-fill";
export const id="dl_abbd2aa03c71a2a1b4b7";
export const url=new URL("../icons/standard-definition-fill.svg?v=3746381f84348e64e00cba9ff258d6b1e9e2b25b9cda919ae1ce87e690081887",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
