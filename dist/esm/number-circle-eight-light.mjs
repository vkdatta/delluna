export const name="number-circle-eight-light";
export const id="dl_0f45b3466e3b47269459";
export const url=new URL("../icons/number-circle-eight-light.svg?v=8c73eaba5af20ad33340fb6e8cf492d4d954e9da1aead74913c1c9defaddc609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
