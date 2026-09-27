export const name="stack-overflow-logo-fill";
export const id="dl_1b787647c7f87ba3e9c5";
export const url=new URL("../icons/stack-overflow-logo-fill.svg?v=98e52c93e466f6fcb42f624dcf0629880d4c1ccc8fce07252aa48c51e7725bbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
