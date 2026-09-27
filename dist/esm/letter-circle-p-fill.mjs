export const name="letter-circle-p-fill";
export const id="dl_3383fba88e2c4b98bf5a";
export const url=new URL("../icons/letter-circle-p-fill.svg?v=8b4dc0d4680f783ea2a2df8b0911cd56c81f55536946db7c0c73e121241767ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
