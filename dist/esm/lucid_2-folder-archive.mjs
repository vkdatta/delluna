export const name="lucid_2-folder-archive";
export const id="dl_9bc99d87b9b94b76ac94";
export const url=new URL("../icons/lucid_2-folder-archive.svg?v=425d5143e6b19aecf7ef565b263ffc41246c84c1055cb6bd84ab13196ac0f1a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
