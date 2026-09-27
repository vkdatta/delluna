export const name="stack-overflow-logo-light";
export const id="dl_e1ae6ff408445e99dfef";
export const url=new URL("../icons/stack-overflow-logo-light.svg?v=4bc9f57b8d9fe535b969fe537e2dd8cb1572b56598db8a5092aace14d5470e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
