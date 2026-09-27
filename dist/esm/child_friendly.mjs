export const name="child_friendly";
export const id="dl_cf1ba627896d4ec29924";
export const url=new URL("../icons/child_friendly.svg?v=ab5b936be7fd86660ecead75e792279ba4f73626b8de4b64d3e2da23a1b8182f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
