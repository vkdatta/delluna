export const name="device-mobile-slash-light";
export const id="dl_dd347a3a540c45509bc0";
export const url=new URL("../icons/device-mobile-slash-light.svg?v=fdcf3d5bf8483cec25b5eb606815329a28442b54f29ab9f7c23801de9626e633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
