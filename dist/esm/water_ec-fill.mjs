export const name="water_ec-fill";
export const id="dl_80f243f2089e36d68d51";
export const url=new URL("../icons/water_ec-fill.svg?v=78979b9bbc19f0f4abdd08ee7f1c4aee4972ed4f42de8881c45b5b5cf8b85d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
