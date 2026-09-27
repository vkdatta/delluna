export const name="basketball-fill";
export const id="dl_d24501d81dec48098de2";
export const url=new URL("../icons/basketball-fill.svg?v=b52f3385dcc35b8856720176843e980bd03750f2dc24429569f7ea7a6eeca356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
