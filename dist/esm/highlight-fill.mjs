export const name="highlight-fill";
export const id="dl_05f601441dd9bc65bca8";
export const url=new URL("../icons/highlight-fill.svg?v=18f1c149a64299352f6a075fabb825626c2862067438c35d4022ca0fd4c8279b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
