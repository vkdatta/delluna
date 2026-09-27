export const name="picnic-table-bold";
export const id="dl_08c9f2460a074b688630";
export const url=new URL("../icons/picnic-table-bold.svg?v=32f15e24a4219731f76e6ed2d6cf4d0a419a718294727f071a16d6a09fcbad91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
