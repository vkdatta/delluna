export const name="lucid_3-shrimp-off";
export const id="dl_dea801c9f26b4506a1ed";
export const url=new URL("../icons/lucid_3-shrimp-off.svg?v=4c0251ce153489ff92e09a8a939b476b69c3b0b223e5c81e11910b3c63b32a8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
