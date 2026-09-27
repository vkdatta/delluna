export const name="fragrance-fill";
export const id="dl_3539b806cd9960b7be2e";
export const url=new URL("../icons/fragrance-fill.svg?v=f0c703eb3182c51d7d5af52c467c052c5b67eef9067b41ea6cf42ce2c49cb1b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
