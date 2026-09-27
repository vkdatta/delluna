export const name="snowflake";
export const id="dl_3b9570db927a633ca9e1";
export const url=new URL("../icons/snowflake.svg?v=8cac44ea6c68b66ff661d0849f04d22e8d5c9849c9e6b0e26b0e59e41e1dc68d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
