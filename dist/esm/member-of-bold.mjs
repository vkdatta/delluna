export const name="member-of-bold";
export const id="dl_0cd7397c7b21423c902a";
export const url=new URL("../icons/member-of-bold.svg?v=dc694f4f017595a2bba984ba1dec8780fff0d5f1e100dafdf966ea634bcc4315",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
