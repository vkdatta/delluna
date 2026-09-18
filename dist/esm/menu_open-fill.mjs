export const name="menu_open-fill";
export const id="dl_359d95b191b1467da405";
export const url=new URL("../icons/M/menu_open-fill.svg?v=ce589712725df94298ed6a51a1df6834e5db724c7b8450db90cce74c64f2227c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
