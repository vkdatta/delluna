export const name="twitter-logo-fill";
export const id="dl_84096e20a58ffe438421";
export const url=new URL("../icons/twitter-logo-fill.svg?v=21e9a32d4615da4195c70639d0aee9f2c0293a7463f142b0ed9b547cd4560f40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
