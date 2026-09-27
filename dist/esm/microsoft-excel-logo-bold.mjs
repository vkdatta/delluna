export const name="microsoft-excel-logo-bold";
export const id="dl_47e222eb1e8740fba3b4";
export const url=new URL("../icons/microsoft-excel-logo-bold.svg?v=928bb9738de007afd35984b58a42f2d8240105bf87ef400eb334b19a7e1013fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
