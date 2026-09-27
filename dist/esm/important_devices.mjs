export const name="important_devices";
export const id="dl_293bdd041c4bebae30c5";
export const url=new URL("../icons/important_devices.svg?v=841c2c113df22d74f86e83371cae91fe8d01183b82fa056e5fa92749887ca3b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
