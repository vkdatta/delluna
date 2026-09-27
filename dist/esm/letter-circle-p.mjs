export const name="letter-circle-p";
export const id="dl_65a31c3abf4346b9b206";
export const url=new URL("../icons/letter-circle-p.svg?v=737994b7465870d7f593fb85c0d1be7831e4a03b780aa0d47ba1ea01a1188ac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
