export const name="width_wide-fill";
export const id="dl_07edf506ef3fa0fba0fd";
export const url=new URL("../icons/width_wide-fill.svg?v=02812954e7b2157820d6be6730eb5e0f5c4e1227d4fa9fa5f04ca6d49db6d5d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
