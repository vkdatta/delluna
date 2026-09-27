export const name="mobile_screensaver-fill";
export const id="dl_87abf11b9b19eb8a8a43";
export const url=new URL("../icons/mobile_screensaver-fill.svg?v=7bfbb360675e0f08cc84dc128f9c78738213404071afbbf13c36b8b4c51466c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
