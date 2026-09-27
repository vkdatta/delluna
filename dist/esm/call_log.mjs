export const name="call_log";
export const id="dl_c26e6187a8319707fdbc";
export const url=new URL("../icons/call_log.svg?v=7e175b8f0b3f686f8afc532ac5a0d0eb5883a3fc5214b5b38c27bed8eb0ed2fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
