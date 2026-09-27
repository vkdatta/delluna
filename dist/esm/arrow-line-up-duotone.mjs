export const name="arrow-line-up-duotone";
export const id="dl_ae237a90555e42fb846c";
export const url=new URL("../icons/arrow-line-up-duotone.svg?v=a815b461ba8e7bda27c2ed8fe4e6c1446d5ed467bd48471bd422eb7c93de6e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
