export const name="shield_card";
export const id="dl_f9203a0bc1280c4c86fc";
export const url=new URL("../icons/shield_card.svg?v=fe8d79f2e0c9862eed4188a9d00a80554694ac28743556a8e36c8b68bd372678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
