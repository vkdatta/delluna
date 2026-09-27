export const name="smart_card_reader-fill";
export const id="dl_2d7f3ebf7ad48845ac94";
export const url=new URL("../icons/smart_card_reader-fill.svg?v=621015db12c457495a10fb78f68eea2464b27e1a06de46bbee47ffb0f7f2baa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
