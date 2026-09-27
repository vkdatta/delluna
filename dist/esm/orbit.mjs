export const name="orbit";
export const id="dl_6c40ea9e2f2c38ff8088";
export const url=new URL("../icons/orbit.svg?v=f8fa40399b9a0a0a826beb4fc0ee58c1ef535e7cae38a31ad85c3f6cff839847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
