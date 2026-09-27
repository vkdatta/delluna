export const name="lucid_2-line-style";
export const id="dl_e736ff4752dc47139cf5";
export const url=new URL("../icons/lucid_2-line-style.svg?v=970364995b8dc694653a9215d88a621960439f0a843fe65c8eb36d8c0b7e64a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
