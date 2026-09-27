export const name="manufacturing-fill";
export const id="dl_7d95ebd8715c14ebf6f0";
export const url=new URL("../icons/manufacturing-fill.svg?v=9aecba4380f8e765d2ae00aacb2e7a546fd4ead03820a46e48174b68b5e6c4a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
