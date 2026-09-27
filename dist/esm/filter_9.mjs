export const name="filter_9";
export const id="dl_af92b5235eafde753b8a";
export const url=new URL("../icons/filter_9.svg?v=02e3524543cc5a7723501c79d95e88d6bdf12a199dceba43f18eae1befecddcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
