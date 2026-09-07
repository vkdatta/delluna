export const name="lucid_1-clipboard-clock";
export const id="dl_b8a797664f264606981f";
export const url=new URL("../icons/lucid_1-clipboard-clock.svg?v=fd370f90c1a902b227ade58bb1f19e4a2e35de0cea5c836d843d9ad1ac08dbe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
