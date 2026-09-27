export const name="1k_plus";
export const id="dl_0f8ebab7168167b9517e";
export const url=new URL("../icons/1k_plus.svg?v=414c84cd21cc8f7f4cc7eb29ef2061d18f984681e08093e4123b053363094df0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
