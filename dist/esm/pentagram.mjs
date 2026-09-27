export const name="pentagram";
export const id="dl_6c606004cefc4d9092cb";
export const url=new URL("../icons/pentagram.svg?v=65bb965bb2bbf3f769ce173b4d2c07e58ae4cec4445b5ac81099bef393814f8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
