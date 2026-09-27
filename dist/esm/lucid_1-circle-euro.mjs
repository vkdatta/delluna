export const name="lucid_1-circle-euro";
export const id="dl_46d2ef1486a34daab166";
export const url=new URL("../icons/lucid_1-circle-euro.svg?v=309f875527bddfdcc869eb058130c8d16b1839e4908ce00b5aefbe739fb8c2a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
