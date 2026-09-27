export const name="swap_horizontal_circle";
export const id="dl_6ca2a09e69f2bd8381f9";
export const url=new URL("../icons/swap_horizontal_circle.svg?v=fe37ff0700ce6ef4b575ca557a64bb6e921d0bb250895a31afcd0d949a25bcef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
