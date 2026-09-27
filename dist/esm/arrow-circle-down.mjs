export const name="arrow-circle-down";
export const id="dl_344776373dbe4fff87fa";
export const url=new URL("../icons/arrow-circle-down.svg?v=c510c319dfa2e9365f97ef60e84782d2ec6b833320c6220299426d64aaa10a1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
