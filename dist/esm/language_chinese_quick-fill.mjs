export const name="language_chinese_quick-fill";
export const id="dl_9e234172522185b0da48";
export const url=new URL("../icons/language_chinese_quick-fill.svg?v=b84bcda335cd902325464e144c2feaf3510d5d561ec9d89f2709c42f0bd36836",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
