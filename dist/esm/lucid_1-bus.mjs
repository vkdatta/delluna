export const name="lucid_1-bus";
export const id="dl_345d053e01c344e4871a";
export const url=new URL("../icons/lucid_1-bus.svg?v=5b0ae516be4e74ca1d22be5f243c5c2f6dd6e91235564934f98680481be6f74c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
