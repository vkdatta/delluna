export const name="scan-smiley-light";
export const id="dl_5595d2e64dc1e67793c5";
export const url=new URL("../icons/scan-smiley-light.svg?v=2300c4ea76720483715895e581ecf5ad08147e57ca3ae89858a0addf1d71ec0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
