export const name="lucid_2-corner-left-down";
export const id="dl_4c054465bf3743589376";
export const url=new URL("../icons/lucid_2-corner-left-down.svg?v=25c3ef083fbd756c484a8851c54f94a49bf22edab0fbcbd47820a0058dddb457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
