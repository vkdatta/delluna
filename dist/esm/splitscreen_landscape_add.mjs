export const name="splitscreen_landscape_add";
export const id="dl_4ddedaeecc611589f471";
export const url=new URL("../icons/splitscreen_landscape_add.svg?v=6f21926a8242b70bc6a76c84159ababfa7eb74dcf4e156abff3ea583dc1f52cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
