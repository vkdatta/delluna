export const name="line-vertical-light";
export const id="dl_7f67900a67b045a2a5f3";
export const url=new URL("../icons/line-vertical-light.svg?v=b84effe78280c664998d5a0c9fc9af08cb67ba58bedfd719568285917dbec83e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
