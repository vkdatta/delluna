export const name="text-h-fill";
export const id="dl_b7b9764e9dfa9c31d600";
export const url=new URL("../icons/text-h-fill.svg?v=22a98757ed4c17933ed51104f14937eb1520795607e2e66ee97c83e5667d855e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
