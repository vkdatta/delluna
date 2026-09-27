export const name="rebase-fill";
export const id="dl_05350709289fc28c8cc4";
export const url=new URL("../icons/rebase-fill.svg?v=d45c908fe2b7de128da0342c09cc78804f90209ab1157cb5ffe0c7565e58d9f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
