export const name="apparel-fill";
export const id="dl_f645b06d50b9c5cae1ce";
export const url=new URL("../icons/apparel-fill.svg?v=a88a9960172be6a74ba9e80b59dc966b74c20b1564e38869158882d4b4ff306a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
