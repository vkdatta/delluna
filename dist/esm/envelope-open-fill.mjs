export const name="envelope-open-fill";
export const id="dl_fedec23456b1466bb182";
export const url=new URL("../icons/envelope-open-fill.svg?v=f693e26088e44439310716c654ae60f6fa854487d2c00610ae4cda0167dd70e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
