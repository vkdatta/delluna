export const name="table_convert";
export const id="dl_5a52d39e8a1bdbcfd31f";
export const url=new URL("../icons/table_convert.svg?v=507c9b39af9d9f8768eed0ab0f66dfa67349f1240d7fdc8c0416012609b000e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
