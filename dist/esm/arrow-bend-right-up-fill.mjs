export const name="arrow-bend-right-up-fill";
export const id="dl_a6bb7bfa98cb45f786f8";
export const url=new URL("../icons/arrow-bend-right-up-fill.svg?v=5de37d9c080dbd7a20c7c5630e00cb08a08fc9f851ea797ec424bded790856c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
