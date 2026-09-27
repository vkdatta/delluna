export const name="windows-logo";
export const id="dl_f8d1b6699e319401d5b6";
export const url=new URL("../icons/windows-logo.svg?v=c973427c7017877de843ae308c38504cb90f0128a7c2e10e83557e621d9b7cbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
