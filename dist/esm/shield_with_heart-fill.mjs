export const name="shield_with_heart-fill";
export const id="dl_5d7e8b0aeca64cbc9b17";
export const url=new URL("../icons/shield_with_heart-fill.svg?v=35644b6ce47a25e8d76378f77d9bdae3f26c7ab277d9fceaa2e1a0f833058276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
