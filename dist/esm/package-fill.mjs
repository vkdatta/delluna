export const name="package-fill";
export const id="dl_867905a7c459433699d8";
export const url=new URL("../icons/package-fill.svg?v=9caa957a5e3b500fc53e249b87ac7645f3cccfcf05432eee8d5ab4c2987a71d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
