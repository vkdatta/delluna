export const name="lastfm-logo-fill";
export const id="dl_681ce5868e4b4b40a00b";
export const url=new URL("../icons/lastfm-logo-fill.svg?v=da70db9dc613baaa28e8754902c2ae955473fad35dabf98017b58befadc9483a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
