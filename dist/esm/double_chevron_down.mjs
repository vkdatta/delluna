export const name="double_chevron_down";
export const id="dl_aa0770c894f72dfc115c";
export const url=new URL("../icons/double_chevron_down.svg?v=c7408bb3ed005f76b83d5d2d4d21f5a79a3e9d50ea9dfe0a4137d2943b1b34a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
