export const name="mouse-duotone";
export const id="dl_7fa45f88b0e74a39b8f9";
export const url=new URL("../icons/mouse-duotone.svg?v=85cf296e8ffe5ee11708c0f5c892cba0189afa311ae0905fbd2d475f6409634b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
