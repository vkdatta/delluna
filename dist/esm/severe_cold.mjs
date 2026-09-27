export const name="severe_cold";
export const id="dl_b2b65f50316b3992f348";
export const url=new URL("../icons/severe_cold.svg?v=d9a9194018067813215f9ab7d8dadda9a4b264dd27a46cc7ba246d95efa488f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
