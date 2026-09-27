export const name="screenshot_region-fill";
export const id="dl_73fe923d2cb828331a1d";
export const url=new URL("../icons/screenshot_region-fill.svg?v=3857b5e6e2e324cc26f87ff6bf0c1189f8fcb980e0c6a3b931412051d08fd515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
