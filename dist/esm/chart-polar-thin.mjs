export const name="chart-polar-thin";
export const id="dl_60e8cc6dc63445eabcfb";
export const url=new URL("../icons/chart-polar-thin.svg?v=57cc8bc8c916c294818d18adb0f115d0a57f26ae02f79b9a586742e1aff1749a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
