export const name="square-exclamation-point";
export const id="dl_0f4b9151313d4c60a80d";
export const url=new URL("../icons/square-exclamation-point.svg?v=8f92c8f2fe9a5226ecce43805b50193c84265db4854ecc5c8faf38aa36b5fcb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
