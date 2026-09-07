export const name="whatsapp-logo-light";
export const id="dl_a5b6059e4c1f4ff59abb";
export const url=new URL("../icons/W/whatsapp-logo-light.svg?v=acb4eae53c4020e725b0a6a9bb63e71aacd1e4eb0f82925b3b425c6a5d117c51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
