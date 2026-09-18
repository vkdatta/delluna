export const name="clean_hands";
export const id="dl_66709210058e493da6ca";
export const url=new URL("../icons/clean_hands.svg?v=3878f52ab93db4ce82aa64d4381eb881c9e3519ff6b8cebfbe692d40d1772383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
