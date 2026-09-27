export const name="meta-logo";
export const id="dl_a8059a908df54d97b9b5";
export const url=new URL("../icons/meta-logo.svg?v=f7932e03c5327c3e19c3667717b18d4e694881800b25490987b92f7faed7666d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
