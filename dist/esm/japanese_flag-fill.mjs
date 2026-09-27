export const name="japanese_flag-fill";
export const id="dl_652ea6ddbbc62f6683d5";
export const url=new URL("../icons/japanese_flag-fill.svg?v=69f4228a4fcd798b292556851429af6fa3bf21091a5e302d5e0ea18fd57f7153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
