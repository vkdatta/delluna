export const name="arrow-up-right-light";
export const id="dl_5eca910667e44363a56f";
export const url=new URL("../icons/arrow-up-right-light.svg?v=76ead11ac662a62f4c76d8d77f21b8ee21277434451565b45c24d63a47bd6504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
