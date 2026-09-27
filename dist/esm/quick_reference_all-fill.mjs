export const name="quick_reference_all-fill";
export const id="dl_de9929520bdb66917d04";
export const url=new URL("../icons/quick_reference_all-fill.svg?v=93b4e5816a97f5254c9e58d0013b9bb20bf84c9a7a630be60f5efec347266715",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
