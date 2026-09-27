export const name="accessibility-fill";
export const id="dl_09a9487260ed077db296";
export const url=new URL("../icons/accessibility-fill.svg?v=9eeed36c45820c77088f30f1b755dd230d69a721a1fac798bcede5ff9062510d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
