export const name="high-definition-light";
export const id="dl_8b2fbe0ed5ec40328ffa";
export const url=new URL("../icons/high-definition-light.svg?v=40783a531909326ca2dca5d5bb244195b27e1543d5f2e7e026aaf57ad7c3b5c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
