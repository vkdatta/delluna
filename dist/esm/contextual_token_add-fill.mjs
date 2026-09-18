export const name="contextual_token_add-fill";
export const id="dl_bacdee1780fa4c3db549";
export const url=new URL("../icons/contextual_token_add-fill.svg?v=72f5e6da8c7494e563f8c5477f99c7aaaf27368087b094b09417f316c254d19b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
