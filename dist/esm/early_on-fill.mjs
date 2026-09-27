export const name="early_on-fill";
export const id="dl_cd66e87a4a976ded71a0";
export const url=new URL("../icons/early_on-fill.svg?v=3f25a46132b4c50621b510c0bf8ad0ca0b7e329f6f8fde4880af584390ba3f36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
