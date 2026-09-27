export const name="1x_mobiledata-fill";
export const id="dl_da3e05735916e04489c9";
export const url=new URL("../icons/1x_mobiledata-fill.svg?v=76c934e9d7848e28dac4bd86195e7864656fbf3fe1e404f31e8b5f0b43baeadc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
