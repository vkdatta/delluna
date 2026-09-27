export const name="lucid_1-circle-check-big";
export const id="dl_bf3701dad76147bc9387";
export const url=new URL("../icons/lucid_1-circle-check-big.svg?v=3c223520ed3838e9e1f70a9ed03e88389eec896aad84a6e7277ffcf754018617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
