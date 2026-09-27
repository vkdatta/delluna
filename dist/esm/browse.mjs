export const name="browse";
export const id="dl_1557b904049400a53e2c";
export const url=new URL("../icons/browse.svg?v=dcfc10b0aed4aed72416402a5f1075038a8795fc5d74542c813ced80efbf0ba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
