export const name="exposure";
export const id="dl_b5d96736d28a4d7dae47";
export const url=new URL("../icons/E/exposure.svg?v=7a97427b72f85872aebb0a96c7abc180ac2e7c21b929a66f3fda01bdc3442d43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
