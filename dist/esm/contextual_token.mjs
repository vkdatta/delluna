export const name="contextual_token";
export const id="dl_dc06e39f3233334a2c94";
export const url=new URL("../icons/contextual_token.svg?v=5a0f8e617561af891bd5c1249bf0b98b8c97626e9096694f1027c3033b33c9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
