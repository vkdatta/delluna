export const name="deployed_code";
export const id="dl_4b18d786694bf7913190";
export const url=new URL("../icons/deployed_code.svg?v=68e017c045e21045ffe92b29b7e0370f07cf65755e5e138a93bd9e559f0159d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
