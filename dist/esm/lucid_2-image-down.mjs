export const name="lucid_2-image-down";
export const id="dl_d89c27f8a7dd47638acb";
export const url=new URL("../icons/lucid_2-image-down.svg?v=41ce699ab94be11386db61732760a4462c2855429703d4798fe654f081bcccb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
