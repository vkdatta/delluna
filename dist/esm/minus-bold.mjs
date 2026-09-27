export const name="minus-bold";
export const id="dl_122f38e5168f4b2482be";
export const url=new URL("../icons/minus-bold.svg?v=6e98acea9dcb1a05e77fb058cb11e00dde57031c77b01bf8a2efa117c00c3742",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
