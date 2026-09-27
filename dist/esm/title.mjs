export const name="title";
export const id="dl_587f4a1be22a5078ee39";
export const url=new URL("../icons/title.svg?v=4d4f126d607be7af784f5832f1da3b67cf313fecf13c40ab1fc4966f0c829d1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
