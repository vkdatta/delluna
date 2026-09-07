export const name="lucid_1-brackets";
export const id="dl_45aa90302b8c4dc69bc6";
export const url=new URL("../icons/lucid_1-brackets.svg?v=b44860485aee516e05a85ee940aa97d32bcd36333a83000ef1de38ddfc5b9c39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
