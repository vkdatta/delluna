export const name="clear_all";
export const id="dl_b7f4f6e685a6d9c721a4";
export const url=new URL("../icons/clear_all.svg?v=cd8f3669590f5507580c107bb8162c02e41ff791a5e9c4aa2c1b3b2172b5ccc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
