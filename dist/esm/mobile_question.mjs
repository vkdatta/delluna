export const name="mobile_question";
export const id="dl_1e7a24c36314139849f6";
export const url=new URL("../icons/mobile_question.svg?v=273595b4ff50c54070f1f8713f5c01cd827309df2c8879f3454a13d032a343ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
