export const name="lucid_1-cloud";
export const id="dl_ff174bb3bd1545f28458";
export const url=new URL("../icons/lucid_1-cloud.svg?v=7a9f4a11ceadfaeca6c717a15d03c2f7b82e7f90f6454763ab926a60b05489f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
