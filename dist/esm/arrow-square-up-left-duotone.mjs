export const name="arrow-square-up-left-duotone";
export const id="dl_387c608efbfd4d7b8358";
export const url=new URL("../icons/arrow-square-up-left-duotone.svg?v=3c3e2bf0acc10b1a5189566cae68557f5f16cbadc4ce0f4f739ba7f7b2aa7704",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
