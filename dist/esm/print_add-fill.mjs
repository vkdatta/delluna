export const name="print_add-fill";
export const id="dl_73a76baef29abaa619ec";
export const url=new URL("../icons/print_add-fill.svg?v=9d801a3a72c06c5792751b05d225fab127fb53aa1ed089986422b91cebc91342",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
