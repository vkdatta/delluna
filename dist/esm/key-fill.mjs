export const name="key-fill";
export const id="dl_dacd55e95b3f46b58b4f";
export const url=new URL("../icons/key-fill.svg?v=9fa7628ff48fcf4aff73de912f88372d43ce3ab2fe2ea08b571f3ef722d2f97e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
