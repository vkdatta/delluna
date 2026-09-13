export const name="7k-fill";
export const id="dl_25b7fe4ca5ce43f29577";
export const url=new URL("../icons/7/7k-fill.svg?v=eed7528fe89a4127fd1d6e0848298636edfa76c3c47f6c46e49dde114e23fe9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
