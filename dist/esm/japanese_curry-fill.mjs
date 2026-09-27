export const name="japanese_curry-fill";
export const id="dl_f9e534e5be064424c6ba";
export const url=new URL("../icons/japanese_curry-fill.svg?v=635f013522bcede3fa77636e9360211ebb5b0656003b507709c6dca7163ce2d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
