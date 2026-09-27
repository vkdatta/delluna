export const name="quick_phrases-fill";
export const id="dl_7ade18c8f0754ee27eb2";
export const url=new URL("../icons/quick_phrases-fill.svg?v=30d428cfa0d22b6bd130c1f534ecf64e77b2f8a7958f7c345891e9c4789386ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
