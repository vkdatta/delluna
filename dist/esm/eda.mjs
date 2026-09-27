export const name="eda";
export const id="dl_889a2ac4758a97045bab";
export const url=new URL("../icons/eda.svg?v=9eb6becb85e0e38050290365f79e2f019ecc14dbbfc40f602ec660c70592274e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
