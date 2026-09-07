export const name="file-svg-light";
export const id="dl_b29d734e1bc14f2a82e0";
export const url=new URL("../icons/file-svg-light.svg?v=7c9b68448cec346a4a075c5e78a4fbbd340c45c012320fdfcc3472401c0ab097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
