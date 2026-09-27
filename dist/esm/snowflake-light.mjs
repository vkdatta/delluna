export const name="snowflake-light";
export const id="dl_ccf89c4280f2bcc6fecf";
export const url=new URL("../icons/snowflake-light.svg?v=5a7eae2bd786b9cd88f7d7f6797e8f1ee9c60535144c79356942b96ab2cc382a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
