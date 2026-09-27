export const name="lucid_2-ligature";
export const id="dl_8f74f75de6a1490aaff6";
export const url=new URL("../icons/lucid_2-ligature.svg?v=0065fadd18d3bee653c8d6c70bde90b11435293fe49086a62925c30d35dde399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
