export const name="smart_card_reader_off-fill";
export const id="dl_4fa326ba52ec4470b73e";
export const url=new URL("../icons/smart_card_reader_off-fill.svg?v=0fe0367c7818a9c97dd7bca38714340b1097ab497ac8facb06cb7813887c6217",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
