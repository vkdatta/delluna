export const name="thunderstorm";
export const id="dl_ecc6e0c100fbe6f216e0";
export const url=new URL("../icons/thunderstorm.svg?v=a5247ccd17cf4cc77d29ee7065107bc4ffa465139e78481be55adc5ff2b1cb04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
