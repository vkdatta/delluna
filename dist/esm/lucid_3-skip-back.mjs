export const name="lucid_3-skip-back";
export const id="dl_225d363e782945239698";
export const url=new URL("../icons/lucid_3-skip-back.svg?v=89058fd3ebd26d2e8746b5b2d91c8a44416b7c46b84782ad344033977be13a09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
