export const name="lastfm-logo-fill";
export const id="dl_681ce5868e4b4b40a00b";
export const url=new URL("../icons/lastfm-logo-fill.svg?v=eac117b3a86e8dfc10cbcd83afbf02303f35efc254e359da02cd31d2af0b261b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
