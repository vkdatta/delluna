export const name="lucid_2-dollar-sign";
export const id="dl_b9326036c0a343b2bec5";
export const url=new URL("../icons/lucid_2-dollar-sign.svg?v=0176f0f90a7badaa96de3c7f6802399d3b4837a379d8936ed2642014e65cfb99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
