export const name="qr_code-fill";
export const id="dl_b5065337e423d8e24447";
export const url=new URL("../icons/qr_code-fill.svg?v=bcb3209a8243b5e0b45bb337e964390469175aed78ec90639d933b9a6e121576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
