export const name="file-ts-duotone";
export const id="dl_3fcf6a1ed79f48cbbcc6";
export const url=new URL("../icons/file-ts-duotone.svg?v=56dcb99b1dab1894eaee5d0414ad2f3d127f28b3f88c097eca8821ee338bd06e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
