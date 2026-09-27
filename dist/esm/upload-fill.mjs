export const name="upload-fill";
export const id="dl_f897b0693a9425eb9028";
export const url=new URL("../icons/upload-fill.svg?v=8766ee8ecb88186dc91c52aff552a7310cd9f27eb771dddfb01e99c4f2132954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
