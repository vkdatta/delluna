export const name="square-stack";
export const id="dl_24ae6fbffa664b10b868";
export const url=new URL("../icons/square-stack.svg?v=07035cf0ebc3b370c4c44c18252e56fb410a1f7d234aa5ed4da101768b028b52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
