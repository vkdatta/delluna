export const name="square-half";
export const id="dl_6a66c1a166e5fe0eb1aa";
export const url=new URL("../icons/square-half.svg?v=2df36de5d59100bec7ed18106c37ff80777f35819a9710abfdf797d9de64500a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
