export const name="smart_card_reader_off-fill";
export const id="dl_6a23c373913ffe8b1ecf";
export const url=new URL("../icons/smart_card_reader_off-fill.svg?v=5be7903dbbd9d04c569650583e1fe15ed70619a3e801e9ae054aa26ed0f33574",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
