export const name="script-fill";
export const id="dl_79560bd7ae7941398a56";
export const url=new URL("../icons/S/script-fill.svg?v=209c2d6f700672e03deb878b8a00c5d3f1bc1c66462dcad8e72eb728cdc17bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
