export const name="line_start-fill";
export const id="dl_ee791362e8ef30978f41";
export const url=new URL("../icons/line_start-fill.svg?v=a5b964d9542cf6fe43fd0cc6080ea502af681b0aa80c7d021686eb16a93fa9ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
