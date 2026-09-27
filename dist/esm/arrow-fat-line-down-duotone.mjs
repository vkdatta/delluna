export const name="arrow-fat-line-down-duotone";
export const id="dl_2b05bf2739a545c5a005";
export const url=new URL("../icons/arrow-fat-line-down-duotone.svg?v=a07a7363c495a9d5f1138eb576fda9a2430a94e29c7536bee9da11fc38452bfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
