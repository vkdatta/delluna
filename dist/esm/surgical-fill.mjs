export const name="surgical-fill";
export const id="dl_e9c78657b16a014b87f2";
export const url=new URL("../icons/surgical-fill.svg?v=16a970c41761277657d89b29f228ee19a34b52946cf6026e954fbf6e233ed204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
