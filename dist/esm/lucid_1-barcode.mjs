export const name="lucid_1-barcode";
export const id="dl_71a900af60a44eacbfa9";
export const url=new URL("../icons/lucid_1-barcode.svg?v=405337ac6f8f9a70082897265664585800eefddcee8a8e47dda73b174087e424",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
