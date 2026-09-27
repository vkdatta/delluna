export const name="error_med-fill";
export const id="dl_b6969310279f211467bc";
export const url=new URL("../icons/error_med-fill.svg?v=105270061a766e82bedf1bfcb94acfa374cc42f0b872e8b12d253753eb6026de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
