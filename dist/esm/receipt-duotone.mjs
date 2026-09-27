export const name="receipt-duotone";
export const id="dl_7cd77b195e5e4a0baaf5";
export const url=new URL("../icons/receipt-duotone.svg?v=9cb449fa8a8833c277e200bbbc1efe1309817a46069dcbfdaa531055a8a3adfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
