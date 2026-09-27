export const name="battery_unknown-fill";
export const id="dl_dfb0477ce3405d2e97a9";
export const url=new URL("../icons/battery_unknown-fill.svg?v=bf7b70bdb40807e01271f0cf6432818389318c09e07a683ed6ed484d37057ae9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
