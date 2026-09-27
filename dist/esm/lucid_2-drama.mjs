export const name="lucid_2-drama";
export const id="dl_7f1c98dda42b4eeb837c";
export const url=new URL("../icons/lucid_2-drama.svg?v=416d7cd0f49102910540469d6aad954a269a9eebe0f6ce712e0e1a7425381270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
