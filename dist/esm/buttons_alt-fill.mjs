export const name="buttons_alt-fill";
export const id="dl_de0b7e3388202300c259";
export const url=new URL("../icons/buttons_alt-fill.svg?v=8c10bd2e1e698f1674c46fa01234fa5e9097fede7a31625b1134ffd08d0f7440",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
