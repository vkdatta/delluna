export const name="lucid_1-book-check";
export const id="dl_7bd0554bb2124a53ab22";
export const url=new URL("../icons/lucid_1-book-check.svg?v=f4b60966c91aeb0fbcc0951cc19bbb716d7fa601a16eac6e50f3afbb33dba30c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
