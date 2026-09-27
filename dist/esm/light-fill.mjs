export const name="light-fill";
export const id="dl_b36ca00a9ae76e9b1f6e";
export const url=new URL("../icons/light-fill.svg?v=629bfdf351b92817a806fbbc7daf90a83057bd579ccb2732ad8539111793ed2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
