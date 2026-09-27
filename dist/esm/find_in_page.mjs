export const name="find_in_page";
export const id="dl_73def97716bf348f43aa";
export const url=new URL("../icons/find_in_page.svg?v=f92c5773f4780472831e7a3129bb430bb36a4ef187f727b341b0efb5f39da4c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
