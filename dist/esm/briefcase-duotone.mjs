export const name="briefcase-duotone";
export const id="dl_7c5da54ec0ac41c097a3";
export const url=new URL("../icons/briefcase-duotone.svg?v=91ca053902d57c96cc5ab86fb5c7f50cc80b80df118accee3cc901dd251042ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
