export const name="gear-fine-bold";
export const id="dl_b83e2876551f4a4484af";
export const url=new URL("../icons/gear-fine-bold.svg?v=d8704b00dfecaa430b1916f9b7568fe679d4689778a551617c08ba78427156b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
