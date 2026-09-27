export const name="desktop_landscape-fill";
export const id="dl_188a1b8b0de997373ef3";
export const url=new URL("../icons/desktop_landscape-fill.svg?v=184dab1a92f694aebf5c557e4ad30793f6798518d5cab60d7c2e9be1bea3f7f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
