export const name="bath_public_large-fill";
export const id="dl_e6308d80a8d84a09ad03";
export const url=new URL("../icons/bath_public_large-fill.svg?v=cb15d9f96b7740e350f50c5c1c915350b0da2196dd82bb69bafa61e7f0e85e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
