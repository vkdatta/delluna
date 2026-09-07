export const name="sort-descending";
export const id="dl_60f28ebfcb034f539123";
export const url=new URL("../icons/S/sort-descending.svg?v=d6991d8da61038967df2cbc908d84cfe7a0fd9626ca3f021c89a84b76f0f517b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
