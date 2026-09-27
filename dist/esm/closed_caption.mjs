export const name="closed_caption";
export const id="dl_80448d222c4597548504";
export const url=new URL("../icons/closed_caption.svg?v=d8859e7f4613b4aac60651c8df283c3fd2a3c703826395a2354ef00adba26586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
