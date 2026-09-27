export const name="lastfm-logo-fill";
export const id="dl_681ce5868e4b4b40a00b";
export const url=new URL("../icons/lastfm-logo-fill.svg?v=d8a703ca4642893d6144f97686fdce03c17aba4d9298a61ba008e7b19d070b4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
