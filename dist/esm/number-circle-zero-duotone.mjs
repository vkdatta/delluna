export const name="number-circle-zero-duotone";
export const id="dl_3b74d99aa19e4b4c9e66";
export const url=new URL("../icons/number-circle-zero-duotone.svg?v=223f9f36c8958402a361cb3d80ab33f079134e90907b536e79002e1a7b55b563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
