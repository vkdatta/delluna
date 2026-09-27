export const name="at-bold";
export const id="dl_47ce5372452f4742a5e9";
export const url=new URL("../icons/at-bold.svg?v=6b6ad7ed695314636fe115ea2f4a0058939ce3943549ebd0880d8564cccd7e67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
