export const name="memory_alt";
export const id="dl_c74a2282650d40f4901f";
export const url=new URL("../icons/M/memory_alt.svg?v=04aabff5bec56dcecb6e6057fc2014ef51c8cf83ef0b22f618ec834ff69375a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
