export const name="google-chrome-logo-bold";
export const id="dl_6907e819e1ac4523881f";
export const url=new URL("../icons/google-chrome-logo-bold.svg?v=f972b808402350f439ca21591535de0c4cb66393adf1cae49627d97552eca36d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
