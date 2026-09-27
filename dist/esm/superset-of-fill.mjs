export const name="superset-of-fill";
export const id="dl_095692d9fdc2871f7fb8";
export const url=new URL("../icons/superset-of-fill.svg?v=a8bb286078c9fc1efbbe7d797eda12ae3c6630098e20b3b461c5ac9b6b22284c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
