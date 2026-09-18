export const name="trolley-fill";
export const id="dl_a26c10149a004f69b11d";
export const url=new URL("../icons/trolley-fill.svg?v=d52b060920cfa98351aa7d97882f6ec7526bfaf27c1ec811475e337e59155c9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
