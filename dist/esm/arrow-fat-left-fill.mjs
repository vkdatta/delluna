export const name="arrow-fat-left-fill";
export const id="dl_fb380522b65e4b64bfbf";
export const url=new URL("../icons/arrow-fat-left-fill.svg?v=8d491cab2cc2ce679191b27c2ed8bde312d3402ece71cbe7b8e664f0d0d19e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
