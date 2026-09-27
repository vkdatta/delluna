export const name="trophy-light";
export const id="dl_413e023cdc5342fb32e6";
export const url=new URL("../icons/trophy-light.svg?v=65adc5cd39cbe41073bfec20a003c7b7b840efc1864440b8011c4db1a47ea3f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
