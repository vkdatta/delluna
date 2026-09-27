export const name="flaky-fill";
export const id="dl_661f5278c3fb1fc9ce80";
export const url=new URL("../icons/flaky-fill.svg?v=768887556758276a1479efbd4d231b1c69fe11fe704b786d4a74638015adc53d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
