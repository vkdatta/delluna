export const name="newspaper-light";
export const id="dl_3488ee432ca248bf905a";
export const url=new URL("../icons/newspaper-light.svg?v=f9fdd8c5bb57fcfbbd1c5696a4b593c54b73eee283e316b5f122136e1f5a6011",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
