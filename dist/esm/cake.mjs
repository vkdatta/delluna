export const name="cake";
export const id="dl_ed5f381d91d7431f9a50";
export const url=new URL("../icons/cake.svg?v=90174cab080b71675cfacfc656b213cbd0a56f9213b0cd27b32ee5e0678ca860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
