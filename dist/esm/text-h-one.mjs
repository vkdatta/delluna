export const name="text-h-one";
export const id="dl_b0971135da3f42dca358";
export const url=new URL("../icons/T/text-h-one.svg?v=6c6871d2d222c3f6719b8a1e6b5c67be0ec9da5e1f79e09b5029330c452718ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
