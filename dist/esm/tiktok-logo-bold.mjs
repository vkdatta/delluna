export const name="tiktok-logo-bold";
export const id="dl_5d925ae71839616b6d10";
export const url=new URL("../icons/tiktok-logo-bold.svg?v=47491ba93a32745fbf62f2b40b1f3c0c07a8f8eb5d5a95d8b498f750fc74665a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
