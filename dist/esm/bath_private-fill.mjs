export const name="bath_private-fill";
export const id="dl_29194b741735e5a68077";
export const url=new URL("../icons/bath_private-fill.svg?v=b41171a8044a6985fa830a7196ddd6913751e0ea4981f446d2f004e0d6e02aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
