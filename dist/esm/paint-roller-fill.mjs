export const name="paint-roller-fill";
export const id="dl_bd5672ae4dfc45018a0b";
export const url=new URL("../icons/paint-roller-fill.svg?v=a3035b345df27c130757bd8d7e0220d9b72d12d32610d1ca0c7c322e1840f07e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
