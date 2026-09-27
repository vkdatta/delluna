export const name="text-underline-fill";
export const id="dl_da46f5abe8f1cd565cdf";
export const url=new URL("../icons/text-underline-fill.svg?v=83bf200d54bc4a249a4f39440aec1f52d31c3fdc97665df094ab8a9f1680c824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
