export const name="check_circle-fill";
export const id="dl_17556468622c06500589";
export const url=new URL("../icons/check_circle-fill.svg?v=474f6b09a7576df8a4bdd51ed722e6745d115939b2d9f88f851cabb3420d23b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
