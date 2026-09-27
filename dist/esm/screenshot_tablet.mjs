export const name="screenshot_tablet";
export const id="dl_b580be290d3df33b77f8";
export const url=new URL("../icons/screenshot_tablet.svg?v=67f133f54188853c7e6c4a6562f265d2d0abc00abdb95289d603b3666c870300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
