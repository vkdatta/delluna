export const name="splitscreen_landscape-fill";
export const id="dl_1f60a64946578cfe7383";
export const url=new URL("../icons/splitscreen_landscape-fill.svg?v=38e41c97c74c1bdf3440d31ac6dca2f78ee772765116685db78eadfcfe78cc4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
