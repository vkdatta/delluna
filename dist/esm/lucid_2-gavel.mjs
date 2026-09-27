export const name="lucid_2-gavel";
export const id="dl_5117c2d58a5c4cdc8485";
export const url=new URL("../icons/lucid_2-gavel.svg?v=87498a0f701b0e892e3f5e925ec6180451dd64a4a24fe1a1182b77bd1ebc126a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
