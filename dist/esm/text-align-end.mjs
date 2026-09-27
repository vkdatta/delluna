export const name="text-align-end";
export const id="dl_5cb2c064350d46778fb6";
export const url=new URL("../icons/text-align-end.svg?v=9791c7f0e695ea00b532da273c6a1130ee838dfe0e32623a80c946277eae05e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
