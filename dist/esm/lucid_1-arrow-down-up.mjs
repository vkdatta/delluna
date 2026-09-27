export const name="lucid_1-arrow-down-up";
export const id="dl_9f0e76fe266048768ad3";
export const url=new URL("../icons/lucid_1-arrow-down-up.svg?v=86e57cafa2d745d9c54b815c0e035a54bf84db8b5c2d20324fbb92968feb18c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
