export const name="exclude-fill";
export const id="dl_4ed7a21c605f4fdb837f";
export const url=new URL("../icons/exclude-fill.svg?v=7202e2dc88117fbdacb3efe8b1a6f8aacefa9d1399a0291802f73a3b71ed6e2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
