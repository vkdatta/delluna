export const name="tractor";
export const id="dl_dbdbf1fa60974897a24a";
export const url=new URL("../icons/tractor.svg?v=ac1313d51b98862e996dbae72e30649727bfb54214bdba4310f4aa05c2a3b19b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
