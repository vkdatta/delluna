export const name="bug-droid";
export const id="dl_ecf99eade5ed40b5977c";
export const url=new URL("../icons/bug-droid.svg?v=358822bb3f88aaaf479daa26001ddd99cd9d0eed51fa31c70e8b1b2cd9415c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
