export const name="arrows-merge-thin";
export const id="dl_b34d7dcbba7549ea9696";
export const url=new URL("../icons/arrows-merge-thin.svg?v=3680fe6a8f8047ce1ebf17a9ff78bb421eb0511dbaaf26753be02d475ddb494a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
